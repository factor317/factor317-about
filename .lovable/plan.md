## factor317 Landing Page

A single, static **HTML-only** marketing page (no React, no routing) describing the factor317 umbrella, its ethos, ecosystem, and shipped apps. Includes a custom SVG logo.

### File

`public/index.html` — served at the root of factor317.com (e.g. `https://factor317.com/`). Self-contained: one HTML document, one `<style>` block in `<head>`, one inline `<svg>` for the logo. No external assets, no JavaScript.

Note: this static `public/index.html` is intended for the factor317.com deploy target. The TanStack app's own root route (`src/routes/index.tsx`) is unaffected and continues to serve the in-app preview.

### CSS Approach

- All styles live in a single `<style>` block in `<head>`.
- **No `style="..."` attributes anywhere in the markup** — every rule is class- or element-based so the block can be lifted into a standalone `styles.css` later with a one-line `<link rel="stylesheet">` swap.
- CSS custom properties (`:root { --color-bg, --color-fg, --color-accent, --space-*, --measure }`) for easy theming.
- Simple, semantic class names (`.site-header`, `.hero`, `.mission`, `.app-card`, `.pipeline`, `.site-footer`, etc.).
- Mobile-responsive via a small number of `@media` queries; no framework.

### Page Sections

1. **Header** — inline SVG logo + wordmark "factor317", tagline "Architectural excellence for personal productivity."
2. **Hero / Mission** — *"We build for the individual, at scale."* + supplied mission paragraph.
3. **The Anti-Hype Ethos** — pragmatic utility, FAANG-rigor applied to small frictions.
4. **The Curator (Modular Ecosystem)** — unified service layer behind the suite.
5. **Published Applications** — cards for:
   - Momentum — meaningful habit tracking — momentum.factor317.app
   - Wisdom Loop — reading/insight companion — wisdom.factor317.app
   - Subscription Scope — subscope.factor317.app
6. **In the Pipeline** — OuttaMyMind, Pocket Ranger, The Transcript-Gatherer.
7. **Engineering Pedigree** — agent-driven development, iterative improvement, security & scale baked in.
8. **Contact / Feedback** — `mailto:info@factor317.com`.
9. **Footer** — © factor317, info@factor317.com.

### SVG Logo Concept

Inline SVG, monochrome with one accent stroke, scales cleanly. Concept: a small **coordinate/vector mark** — short aligned vectors converging on an origin point, suggesting alignment, loops, and a point of origin in a larger architecture. Wordmark `factor317` with `317` subtly emphasized.

### Tone & Visual Direction

- "Seasoned professional" voice — no "revolutionary," "seamless," "game-changing."
- Vocabulary: robust, iterative, utilitarian, vetted, pragmatic.
- Light neutral background, generous whitespace, single accent color, system sans stack (no web font requests). Hairline dividers, fluid type.

### Out of Scope

- No React, no new routes, no dependencies.
- No backend/form — feedback via `mailto:`.
- No favicon/OG image in this pass.
