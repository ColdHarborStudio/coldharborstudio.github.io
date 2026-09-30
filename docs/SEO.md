# Cold Harbor Studio SEO handoff

## Google Search Console

1. Add `coldharborstudio.com` as a Google Search Console **Domain** property.
2. Copy the TXT verification value Google provides and add it through Porkbun DNS. Do not use a placeholder value from this repository.
3. Submit `https://www.coldharborstudio.com/sitemap.xml` in Search Console.
4. Inspect `https://www.coldharborstudio.com/freezerfiles.html` with URL Inspection.
5. Request indexing for that URL.
6. Repeat URL Inspection and request indexing for each newly published guide.
7. Review search queries, clicks, and impressions monthly. Use that data to improve genuinely useful content rather than adding repetitive keyword pages.

## Future FreezerFiles guides

Keep guides as individual static HTML files in `guides/`, using the existing site header, footer, stylesheet, metadata conventions, and a self-referencing canonical URL. Add each published guide to `sitemap.xml` and link it contextually from FreezerFiles or another relevant page.

The next possible articles are:

- `freezer-inventory-system.html` — A Simple Freezer Inventory System That Stays Updated
- `freezer-inventory-app-vs-spreadsheet.html` — Freezer Inventory App vs. Spreadsheet: Which Works Better?
- `organize-multiple-freezers.html` — How to Keep Track of Food in Multiple Freezers
- `use-older-frozen-food-first.html` — How to Use Older Frozen Food First

Publish these only when each article can provide distinct, practical value. No blog framework is needed for this static site.

## Post-deployment checks

- Test the deployed FreezerFiles page with [Google Rich Results Test](https://search.google.com/test/rich-results).
- Check the deployed canonical and indexing signals with [Google URL Inspection](https://search.google.com/search-console).
- Validate individual markup changes with the [W3C HTML validator](https://validator.w3.org/nu/) and structured data with [Schema.org Validator](https://validator.schema.org/).

These external tests should be run against the public URLs after deployment; this file does not claim that Google has crawled or approved the pages.
