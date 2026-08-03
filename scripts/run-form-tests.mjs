/**
 * Runs the quote-endpoint tests in two passes against real dev servers:
 * the functional cases with the rate limit raised, then the rate limiter
 * itself at its production threshold. Neither pass bypasses any code.
 *
 * Astro 7's dev server daemonises and falls back to another port if the one
 * asked for is busy, so the port is read back from its output rather than
 * assumed, and it is shut down with `astro dev stop`.
 */
import { spawn, execSync } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

const stopServer = () => {
  try {
    execSync('npx astro dev stop', { stdio: 'ignore' });
  } catch {
    /* nothing running */
  }
};

function startServer(env) {
  return new Promise((resolve, reject) => {
    const proc = spawn('npx', ['astro', 'dev'], {
      env: { ...process.env, ...env },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let buffer = '';
    const onData = (chunk) => {
      buffer += chunk.toString();
      const match = buffer.match(/localhost:(\d+)/);
      if (match) resolve(Number(match[1]));
    };
    proc.stdout.on('data', onData);
    proc.stderr.on('data', onData);
    setTimeout(() => reject(new Error(`dev server did not report a port:\n${buffer}`)), 60_000);
  });
}

async function waitReady(port) {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://localhost:${port}/api/quote/`);
      if (res.status === 405) return;
    } catch {
      /* not listening yet */
    }
    await sleep(500);
  }
  throw new Error(`endpoint never became ready on ${port}`);
}

const runTests = (env) =>
  new Promise((resolve) => {
    const p = spawn('node', ['scripts/test-forms.mjs'], {
      env: { ...process.env, ...env },
      stdio: 'inherit',
    });
    p.on('exit', (code) => resolve(code ?? 1));
  });

async function pass(label, serverEnv, testEnv) {
  console.log(`\n--- ${label} ---`);
  stopServer();
  await sleep(500);
  const port = await startServer(serverEnv);
  await waitReady(port);
  const code = await runTests({ ...testEnv, FORM_BASE: `http://localhost:${port}` });
  stopServer();
  await sleep(500);
  return code;
}

let failed = 0;
failed += await pass('functional cases (rate limit raised)', { QUOTE_RATE_LIMIT: '500' }, {});
failed += await pass('rate limiter (production threshold)', {}, { RATE_LIMIT_ONLY: '1' });

process.exit(failed ? 1 : 0);
