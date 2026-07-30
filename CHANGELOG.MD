# Changelog

## Gabriel Philip General — Webfolio

All notable changes to this project are documented here.

Format: Version · Date · What changed and why.


> This changelog documents the evolution of the Webfolio, not every individual code change.
---

## [Unreleased]

> Changes staged but not yet deployed to production.

---

## [v2.0.0] — 2026-07-30

> A major milestone. The Webfolio now reflects my broader identity as an Information Systems graduate instead of focusing solely on technical writing.

### Changed

- Repositioned the Webfolio from **Technical Writer** to **Information Systems Graduate**.
- Rewrote the homepage, About page, and supporting copy to better reflect my approach to systems thinking, problem solving, documentation, and user experience.
- Replaced role-specific messaging with broader positioning around improving systems, processes, and how people interact with them.
- Simplified the writing throughout the site using plain language and a more conversational tone.
- Refined the site's structure and messaging to better showcase projects and case studies.

### Added

- Personal philosophy section explaining how I approach systems and problem solving.
- Principles section outlining the way I think through projects, from understanding the problem to documenting the final solution.

### Removed

- Technical Writer positioning throughout the Webfolio.
- Service-oriented messaging that no longer reflected my broader Information Systems background.

### Why

This Webfolio originally focused on technical writing because it reflected the direction I was exploring at the time.

As the project evolved, I realized technical writing is only one part of what I do. My work is really about understanding problems, improving processes, organizing information, documenting systems, and creating experiences that are easy for people to use.

This version brings the Webfolio in line with that broader identity.

---

## [v1.1.2] — 2026-04-26

> Expanded the Webfolio and improved navigation.

### Added

- Homepage with avatar, bio, navigation, social links, and footer.
- Long-form **What I Do** page.
- Shared design system and responsive styling.
- Scroll to Top / Scroll to Bottom toggle button.
- Project changelog.

### Changed

- Renamed **Portfolio** to **Work**.
- Added Notion workspace under **Work**.
- Updated GitHub link to the new username.
- Improved homepage copy and page structure.
- Adjusted spacing and visual hierarchy.

### Removed

- Removed the Portfolio page in favor of a centralized **Work** section.

### Design

- Introduced a consistent visual design system using DM Mono and DM Sans.
- Established a charcoal color palette and editorial-inspired styling.
- Kept the site fully static with minimal dependencies.

### Accessibility

- Improved text contrast to meet WCAG AA guidelines.
- Increased label sizes for readability.
- Added keyboard focus states.
- Added accessibility labels for icon-only links.
- Improved touch target sizing across interactive elements.

### Mobile

- Added responsive layouts for smaller screens.
- Improved CTA usability on mobile.
- Optimized layout and typography for narrow displays.

### Performance

- Optimized font loading.
- Compressed images using WebP.
- Minified CSS before deployment.

### Content

- Updated homepage bio.
- Released Version 3 of the **What I Do** page.
- Improved internal and external link behavior.

---

## [v1.0.1] — 2026-04-25

> Small usability improvements.

### Added

- Scroll to Top / Scroll to Bottom toggle button.

### Changed

- Refined homepage copy.

---

## [v1.0.0] — 2026-04-25

> Initial public release.

### Added

- Homepage.
- What I Do page.
- Responsive layout.
- Basic navigation.
- Social links.

---

## How to Use This File

Every time you make a meaningful change, add an entry under **[Unreleased]** before committing.

When you're ready to deploy, move those entries into a new version section.

### Categories

- **Added** — New pages, features, or sections.
- **Changed** — Existing content, design, or functionality updated.
- **Fixed** — Bugs or broken functionality corrected.
- **Removed** — Features or content intentionally removed.
- **Performance** — Improvements to speed or efficiency.
- **Accessibility** — Improvements that make the site easier for everyone to use.

### Commit Workflow

```bash
git add .
git commit -m "v2.0.0"
git push
```

---

## Version Naming

- **v1.0.0** — First public release.
- **v1.0.x** — Small fixes, copy changes, or maintenance.
- **v1.x.0** — New pages, features, or significant improvements.
- **v2.0.0** — Major redesign, repositioning, or structural overhaul.