# Changelog

## Gabriel Philip General — Link-in-Bio Project

All notable changes to this project are documented here.
Format: Version · Date · What changed and why.

---

## [Unreleased]

> Changes staged but not yet deployed to production.

---

## [v1.0.0] — 2026-04-25

> First commit. Homepage and What I Do section both live.

## [v1.0.1] — 2026-04-25

> Added Scroll to Top / Scroll to Bottom toggle button
>
> Changed some content copy

### Added

- `index.html` — Homepage: avatar, name, role, bio, nav links, social icons, footer
- `style.css` — Design system: color variables, Flexbox layout, card, mobile media query
- `what-i-do.html` — What I Do page with v3 copy: opening story, blueprint analogy, signal list, deliverables grid, CTA
- `what-i-do.css` — Stylesheet for long-form content page, same color variables as homepage
- `CHANGELOG.md` — This file
- `what-i-do.js` — Needed for Scroll to Top / Scroll to Bottom toggle button

### Design

- Font pairing: DM Mono (name, role, labels, links) + DM Sans (bio, body text)
- Color palette: charcoal `#1E1F20` background, `#272829` card surface
- No JavaScript — fully static, no dependencies to maintain or break
- Avatar: rounded rectangle, not circle — more editorial, less social-media
- All borders: `1px` — `0.5px` renders unpredictably on non-retina screens

### Accessibility

- `--text-2`: `#909090` → `#A0A09E` — failed WCAG AA contrast ratio
- `--text-3`: `#5A5A5A` → `#787876` — was 2.07:1, now passes at normal text sizes
- Section labels: `12px` → `14px` — below 14px is a readability concern on dark backgrounds
- `:focus-visible` added on all interactive elements for keyboard navigation
- `aria-label` on all icon-only links
- `aria-hidden="true"` on all decorative SVGs and signal dots
- Touch targets: all buttons enforced at `min-height: 44px`

### Mobile

- `@media (max-width: 540px)` breakpoint on both stylesheets
- CTA button: `width: 100%` on mobile for easier tap
- Deliverables grid: two columns → single column on small screens
- Body text: `16px` → `15px` on mobile

### Performance

- Added `rel="preconnect"` to Google Fonts domains on both pages — opens font server
  connection early so fonts load faster on first visit
- Added `crossorigin` on `fonts.gstatic.com` preconnect — required because fonts
  load from a different subdomain
- `display=swap` on Google Fonts URL — browser shows fallback font immediately
  while custom font loads instead of showing invisible text
- Images compressed via Squoosh: WebP format, resized to 200x200px — reduced from
  potential 3-5MB to under 20KB
- CSS minified via cssminifier.com before final deploy — strips whitespace and
  comments, approximately 40-50% size reduction

### Content

- Homepage bio: _"I document your systems so clearly, your least techy team member
  stops asking for help. Your IT guy might not appreciate that. Your wallet will."_
- What I Do copy: v3 — "Mark" opening story, blueprint analogy, signal list,
  "One Thing Worth Knowing" section
- Internal nav links: no `target="_blank"` — stays in same tab
- External links (LinkedIn, GitHub, Tally): `target="_blank"` + `rel="noopener noreferrer"`
- Changed spacing of good and bad blueprint. Added more context and confidence in _"That's what I make. Not just a good blueprint, but a great one."_
- Changed job title to a more clear one

---

## How to Use This File

Every time you make a change, add an entry under `[Unreleased]` before committing.
When you're ready to push, move those entries under a new version heading.

**Categories:**

- `Added` — new files, pages, or features
- `Changed` — updates to existing design or content
- `Fixed` — bugs or broken things corrected
- `Removed` — anything deleted and why
- `Performance` — speed or loading improvements

**Commit workflow:**

```
git add .
git commit -m "v1.0.1"
git push
```

---

## Version Naming

- `v1.0.0` — first live deployment
- `v1.0.1` — small fix or copy tweak
- `v1.1.0` — new page or section added (Portfolio, Case Study, etc.)
- `v2.0.0` — major redesign or structural overhaul
