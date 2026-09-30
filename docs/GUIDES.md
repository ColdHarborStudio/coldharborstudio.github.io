# Cold Harbor Studio Guides

Guides are evergreen, people-first articles that explain useful workflows behind Cold Harbor Studio apps. They are part of the existing static site; no generator, CMS, or separate blog theme is required.

## File structure

- `guides.html` is the public Guides landing page.
- `guides/` contains one static HTML file per published guide.
- `styles.css` contains the shared guide-card and article styles.
- `sitemap.xml` lists every published guide URL.

Use short, descriptive filenames such as `guides/freezer-inventory-meal-planning.html`. Do not create placeholder pages for unpublished topics.

## Adding a guide

1. Create a static HTML file in `guides/` by using an existing guide as the structural reference.
2. Reuse the shared header, primary navigation, footer, typography, colors, spacing, and article classes.
3. Add one article card to `guides.html` with the app/topic label, title, useful description, and article link. Include a date only when it benefits readers.
4. Add contextual links from relevant product or site pages without interrupting their primary calls to action.
5. Add the public article URL to `sitemap.xml`.
6. Check the page at desktop, tablet, and iPhone widths, then validate links, metadata, structured data, heading order, image paths, alt text, and keyboard focus.

## Required metadata

Every guide needs:

- A unique, natural `<title>` ending in `| Cold Harbor Studio`.
- A concise meta description written for people, not a list of search terms.
- A self-referencing canonical URL on `https://www.coldharborstudio.com/`.
- Open Graph title, description, type, URL, image, and image alt text.
- Twitter/X metadata only while the shared site pattern continues to use it.

Use an existing, relevant final marketing asset for social and in-article imagery. Do not use source/debug captures, review screenshots, personal inventory, or generic stock art. Include meaningful alt text, intrinsic dimensions, and lazy loading for below-the-fold images.

## Article structured data

Add valid `Article` JSON-LD with only maintainable, known information:

- `headline`
- `description`
- `author` and `publisher` as the `Cold Harbor Studio` organization
- `datePublished` and `dateModified` using ISO dates when known
- `image` when the page has an appropriate public image
- `mainEntityOfPage` pointing to the canonical URL

A matching `BreadcrumbList` may be included for `Cold Harbor Studio → Guides → Article`. Never add fabricated ratings, review counts, readership, biographies, or other unsupported claims. Update `dateModified` only when the article changes meaningfully.

## Editorial guidance

Write a distinct, genuinely useful evergreen article before publishing a new URL. Start with a real problem, give a practical workflow, keep product mentions proportionate, and prefer clear experience-based language over keyword repetition. Avoid food-safety or expiration claims; frozen dates in FreezerFiles are organizational and quality context, not a safety determination.

Do not bulk-publish thin, repetitive, or AI-generated SEO content. A smaller collection of useful guides is the intended model.

## Future topic ideas

These topics are planning notes only. Do not add them to `guides.html`, create public pages for them, or add them to the sitemap until each has a complete, distinct article:

- How to Organize a Chest Freezer Without Forgetting What&rsquo;s Inside
- A Simple Freezer Inventory System That Stays Updated
- Freezer Inventory App vs. Spreadsheet: Which Works Better?
- How to Keep Track of Food in Multiple Freezers
- How to Use Older Frozen Food First
- How to Inventory a Chest Freezer in 15 Minutes
- What to Do After a Costco or Bulk Grocery Run
