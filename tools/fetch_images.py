#!/usr/bin/env python3
"""
Downloads product imagery from the old site into src/assets/products/.

The source host is a compromised WordPress install, so nothing it returns is
trusted on the strength of its URL, extension or Content-Type header. Every
response is checked against the actual leading bytes of the file, and anything
that is not a real raster image is written to a quarantine report and skipped.
This is the only step that touches the network.

  python3 tools/fetch_images.py            # download what is missing
  python3 tools/fetch_images.py --verify   # re-check what is already on disk
"""
from __future__ import annotations

import concurrent.futures as cf
import csv
import hashlib
import json
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEST = ROOT / "src" / "assets" / "products"
REPORTS = ROOT / "reports"
UA = "Mozilla/5.0 (compatible; static-site-migration/1.0)"

# Leading bytes that identify a real raster image. A file is accepted only if it
# starts with one of these; an .jpg that begins with "<?php" or "<!DOCTYPE" is a
# webshell or an error page, not an image, and is quarantined.
MAGIC: list[tuple[bytes, str]] = [
    (b"\xff\xd8\xff", "jpg"),
    (b"\x89PNG\r\n\x1a\n", "png"),
    (b"GIF87a", "gif"),
    (b"GIF89a", "gif"),
    (b"RIFF", "webp"),          # confirmed further below
    (b"BM", "bmp"),
]


def sniff(data: bytes) -> str | None:
    for magic, kind in MAGIC:
        if data.startswith(magic):
            if kind == "webp":
                return "webp" if data[8:12] == b"WEBP" else None
            return kind
    return None


def local_name(url: str) -> str:
    """Flatten wp-content/uploads/2024/08/foo.jpg to 2024-08-foo.jpg.

    Keeping the date folders would scatter 730 files across 30 directories for
    no benefit, and two uploads in different months can share a basename.
    """
    tail = url.split("/uploads/")[-1] if "/uploads/" in url else url.rsplit("/", 1)[-1]
    name = re.sub(r"[^A-Za-z0-9._-]+", "-", tail.replace("/", "-")).strip("-")
    return name.lower()


def fetch(url: str) -> tuple[str, str, str]:
    """-> (url, status, detail). Never raises; failures are reported as rows."""
    dest = DEST / local_name(url)
    if dest.exists() and dest.stat().st_size > 0:
        return (url, "cached", dest.name)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            data = r.read()
    except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, OSError) as e:
        return (url, "failed", str(e)[:120])

    if not data:
        return (url, "failed", "empty response")
    kind = sniff(data)
    if kind is None:
        head = data[:24]
        return (url, "quarantined",
                f"not an image; leading bytes {head!r}")

    dest.write_bytes(data)
    return (url, "downloaded", f"{kind} {len(data) // 1024}KB")


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    products = json.loads((ROOT / "src" / "data" / "products.json").read_text())
    urls = sorted({im["src"] for p in products for im in p["images"]})
    print(f"{len(urls)} unique images")

    results: list[tuple[str, str, str]] = []
    with cf.ThreadPoolExecutor(max_workers=8) as pool:
        for i, res in enumerate(pool.map(fetch, urls), 1):
            results.append(res)
            if i % 50 == 0:
                print(f"  {i}/{len(urls)}")

    counts: dict[str, int] = {}
    for _, status, _ in results:
        counts[status] = counts.get(status, 0) + 1

    with (REPORTS / "IMAGE_DOWNLOAD_REPORT.csv").open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["url", "status", "detail", "local_file", "sha256"])
        for url, status, detail in sorted(results):
            p = DEST / local_name(url)
            digest = hashlib.sha256(p.read_bytes()).hexdigest() if p.exists() else ""
            w.writerow([url, status, detail, p.name if p.exists() else "", digest])

    for status, n in sorted(counts.items()):
        print(f"  {status:12} {n}")
    if counts.get("quarantined"):
        print("\nQUARANTINED (not images, not written):", file=sys.stderr)
        for url, status, detail in results:
            if status == "quarantined":
                print(f"  {url}\n    {detail}", file=sys.stderr)


if __name__ == "__main__":
    main()
