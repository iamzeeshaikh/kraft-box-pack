/**
 * Hand-written content for individual products.
 *
 * The imported WordPress copy was written to a template. Every product opened
 * the same way, listed the same benefits, repeated the same three tables and
 * asked the same questions with the name swapped in. It also carried phrases
 * scraped from search queries — "kraft bakery boxes near me" written into the
 * middle of a sentence.
 *
 * This replaces it product by product. The rule for every field: if a sentence
 * would be equally true of the next product in the same category, it does not
 * belong here. "Made from durable kraft board" is true of all 158 and says
 * nothing. "The domed cap is the widest point, and it is what the carton has
 * to close over" is true of one.
 *
 * Business facts — the 100-unit minimum, 8-10 business day turnaround, the
 * $0.30 starting price, free design and free shipping — are NOT repeated here.
 * They live in src/data/business-facts.ts and are rendered by the template, so
 * they cannot drift between pages.
 */

export interface ProductSection {
  /** Written for this product, not a heading reused across the category. */
  h2: string
  body: string[]
  list?: { title?: string; items: string[] }
  table?: { caption: string; head: string[]; rows: string[][] }
}

export interface ProductFaq {
  question: string
  answer: string
}

export interface ProductContent {
  /**
   * The opening paragraph, shown above the fold. One or two sentences saying
   * what physically goes in the box and who orders it.
   */
  intro: string

  /**
   * Body sections. The number and the subject vary by product — a fragile
   * item earns a protection section, a regulated one earns a panel-space
   * section, a plain retail carton earns neither.
   */
  sections: ProductSection[]

  /**
   * One contextual internal link out of the page, placed after the sections.
   * Descriptive anchor, no "click here", and never the same destination that
   * the breadcrumb already provides.
   */
  link?: { lead: string; href: string; anchor: string; tail: string }

  /** Ten questions a buyer of this specific product actually asks. */
  faqs: ProductFaq[]
}

export type ProductContentMap = Record<string, ProductContent>
