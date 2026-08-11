import { SITE_URL, BRAND_NAME, CONTACT, SOCIAL } from '../data/site';
import type { Product, Category, Faq } from '../data/content';

/**
 * JSON-LD builders.
 *
 * Every node is backed by something visible on the page it appears on. The old
 * WordPress build emitted an `aggregateRating` from a Schema plugin with no
 * reviews behind it; that node is not carried over, because a rating nobody
 * left is a deceptive rich result and a manual-action risk.
 */

const abs = (path: string) => new URL(path, SITE_URL).href;

export function organization() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BRAND_NAME,
    url: `${SITE_URL}/`,
    email: CONTACT.email,
    telephone: CONTACT.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.locality,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    sameAs: SOCIAL.map((s) => s.href),
  };
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: BRAND_NAME,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export interface Crumb {
  name: string;
  url: string;
}

export function breadcrumbs(path: string, crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${abs(path)}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: abs(c.url),
    })),
  };
}

export function faqPage(path: string, faqs: Faq[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${abs(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        // Schema wants the answer as text, and the visible answer is markup.
        text: f.answer.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
      },
    })),
  };
}

/**
 * Article schema for the blog. Headline, description, hero and date all come
 * from the post's frontmatter, which is what the page renders. Posts carry no
 * byline, so the organisation is author as well as publisher.
 */
export function blogPosting(post: {
  title: string;
  metaDescription: string;
  url: string;
  image: string;
  date: string;
  updated?: string;
}) {
  const published = `${post.date}T12:00:00Z`;
  /* dateModified only differs from datePublished where the article has
     actually been revised, so an unrevised post does not claim freshness it
     has not earned. */
  const modified = post.updated ? `${post.updated}T12:00:00Z` : published;
  return {
    '@type': 'BlogPosting',
    '@id': `${abs(post.url)}#article`,
    headline: post.title,
    description: post.metaDescription,
    url: abs(post.url),
    image: abs(post.image),
    datePublished: published,
    dateModified: modified,
    inLanguage: 'en-US',
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(post.url) },
  };
}

export function webPage(
  path: string,
  name: string,
  description: string,
  /** Narrows the node where schema.org has a better fit than plain WebPage. */
  type: 'WebPage' | 'AboutPage' | 'ContactPage' = 'WebPage',
) {
  return {
    '@type': type,
    '@id': `${abs(path)}#webpage`,
    url: abs(path),
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  };
}

/**
 * Shipping terms as published on the site: free shipping across the USA,
 * "Fast Shipping 8-10 Business Days" (the standing feature strip claim).
 */
function shippingDetails() {
  return {
    '@type': 'OfferShippingDetails',
    shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: 'USD' },
    shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
    deliveryTime: {
      '@type': 'ShippingDeliveryTime',
      handlingTime: {
        '@type': 'QuantitativeValue',
        minValue: 0,
        maxValue: 2,
        unitCode: 'DAY',
      },
      transitTime: {
        '@type': 'QuantitativeValue',
        minValue: 8,
        maxValue: 10,
        unitCode: 'DAY',
      },
    },
  };
}

/**
 * Return terms exactly as the /refund_returns/ page states them: US customers,
 * 10-day window, return by mail with a prepaid label, no restocking fee.
 */
function returnPolicy() {
  return {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: 'US',
    returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
    merchantReturnDays: 10,
    returnMethod: 'https://schema.org/ReturnByMail',
    returnFees: 'https://schema.org/FreeReturn',
  };
}

/**
 * Product with an Offer.
 *
 * The price carried through from WooCommerce is a per-unit starting figure —
 * these are made-to-order boxes with a 100-unit minimum — so the offer is
 * marked with `priceSpecification` describing the unit and the minimum, rather
 * than implying a single box can be bought for thirty cents.
 *
 * No `aggregateRating` is emitted: the site has no published reviews (the
 * WordPress export carries zero comments and every product's WooCommerce
 * rating is 0), and Google treats a rating without reviews behind it as
 * deceptive structured data.
 */
/** Site-wide per-box entry price, used when a product carries none of its own. */
const FALLBACK_PRICE = 0.3;

export function product(p: Product, images: string[]) {
  const parsed = Number.parseFloat(p.price);
  // Every product must reach Google with a concrete price; a range would leave
  // it ineligible for a merchant listing.
  const price = Number.isFinite(parsed) ? parsed : FALLBACK_PRICE;
  const node: Record<string, unknown> = {
    '@type': 'Product',
    '@id': `${abs(p.url)}#product`,
    name: p.name,
    description: p.seoDescription || p.plainShort,
    url: abs(p.url),
    image: images.map((u) => abs(u)),
    sku: p.sku || p.slug,
    brand: { '@type': 'Brand', name: BRAND_NAME },
    category: p.categoryNames.join(', '),
  };

  node.offers = {
    '@type': 'Offer',
    '@id': `${abs(p.url)}#offer`,
    price: price.toFixed(2),
    priceCurrency: p.currency || 'USD',
    priceValidUntil: '2027-08-04',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    url: abs(p.url),
    seller: { '@id': `${SITE_URL}/#organization` },
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: price.toFixed(2),
      priceCurrency: p.currency || 'USD',
      unitText: 'per box',
      eligibleQuantity: {
        '@type': 'QuantitativeValue',
        minValue: 100,
        unitText: 'boxes',
      },
    },
    shippingDetails: shippingDetails(),
    hasMerchantReturnPolicy: returnPolicy(),
  };
  return node;
}

export function collectionPage(
  path: string,
  name: string,
  description: string,
  items: { name: string; url: string }[],
) {
  return [
    {
      '@type': 'CollectionPage',
      '@id': `${abs(path)}#collectionpage`,
      url: abs(path),
      name,
      description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: { '@id': `${abs(path)}#itemlist` },
    },
    {
      '@type': 'ItemList',
      '@id': `${abs(path)}#itemlist`,
      name,
      numberOfItems: items.length,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: items.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: p.name,
        url: abs(p.url),
      })),
    },
  ];
}

export function categoryNode(c: Category) {
  return collectionPage(c.url, c.name, c.metaDescription, c.items);
}

/** Wrap nodes into a single @graph document. */
export function graph(nodes: unknown[]) {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) };
}
