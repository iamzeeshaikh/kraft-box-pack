import type { ProductContent, ProductContentMap } from './types'
import preserved from './preserved-links.json'
import { jewelleryContent } from './jewellery'
import { displayToyContent } from './display-toy'
import { pharmaContent } from './pharma'
import { electronicsApparelContent } from './electronics-apparel'
import { artIndustrialContent } from './art-industrial'
import { cosmeticLuxuryContent } from './cosmetic-luxury'
import { coloredWrappingContent } from './colored-wrapping'
import { giftSpecialtyContent } from './gift-specialty'
import { packagingBoxesContent } from './packaging-boxes'

export type { ProductContent, ProductSection, ProductFaq } from './types'

/**
 * Hand-written product content, merged from the per-category files.
 *
 * Coverage is partial while these are being written. A product without an
 * entry falls back to its imported WordPress copy, which is correct but
 * templated — so `contentCoverage` is the honest measure of how much of the
 * catalogue has been rewritten.
 */
const ALL: ProductContentMap = {
  ...jewelleryContent,
  ...displayToyContent,
  ...pharmaContent,
  ...electronicsApparelContent,
  ...artIndustrialContent,
  ...cosmeticLuxuryContent,
  ...coloredWrappingContent,
  ...giftSpecialtyContent,
  ...packagingBoxesContent,
}

export const contentFor = (slug: string): ProductContent | undefined => ALL[slug]
export const contentCoverage = Object.keys(ALL).length

export interface PreservedLink {
  href: string
  name: string
}

/**
 * Internal links the imported copy already carried, frozen before that copy
 * was replaced.
 *
 * All 158 products linked out from their body text — 309 links across 141
 * destinations, generally the parent category plus one related product.
 * Rewriting the copy by hand would have dropped every one of them silently,
 * one product at a time, with nothing to catch it.
 *
 * They are therefore held separately from the written content and rendered by
 * the template regardless of what the new copy says, so a rewrite cannot lose
 * a link. New contextual links are added on top through each entry's own
 * `link` field.
 *
 * Anchor text is rebuilt from the destination's own page name rather than
 * carried over, because several of the original anchors were bare keywords.
 */
const PRESERVED = preserved as Record<string, PreservedLink[]>

export const preservedLinksFor = (slug: string): PreservedLink[] => PRESERVED[slug] ?? []
