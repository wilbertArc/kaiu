# KAIU Website — React (Vite)

A React recreation of the KAIU wood veneer marketing site, styled per the KAIU Design System (Gothic A1 + Inter, warm brown palette, pill buttons).

## Run it

```
npm install
npm run dev
```

Then open the printed localhost URL. `npm run build` produces a static `dist/` folder you can deploy anywhere.

## Structure

- `src/App.jsx` — shell (header/footer) + `react-router-dom` routes.
- `src/pages/` — one `.jsx` + matching `.css` per page: `Home`, `About`, `Products`, `ProductDetail`, `Projects`, `ProjectDetail`, `Services`, `Contact`.
- `src/data.js` — the 12 veneer products, 6 Mercure Hotel project rooms, and services list. Edit copy/colors here.
- `src/components/` — `Header` + `Header.css`, `Footer` + `Footer.css`, `Component1` (nav link) + `.css`, `LanguageSwitch` (EN pill) + `.css`, `Shared.jsx` (Swatch, ProjectCard, woodgrain filter — layout classes for these live in `index.css`).
- `src/index.css` — design tokens (colors, type, spacing) plus shared classes (`.eyebrow`, `.pill-btn`, `.swatch`, `.project-card`, `.detail-info-grid`, etc.) reused across pages.
- `public/assets/` — logo and social icons.

Every page/component owns its own CSS file, imported at the top of its `.jsx` — only truly per-item dynamic values (a product's swatch color, a project's gradient) stay as inline `style`, since those come from data, not design.

## Routes

`/` `/about` `/products` `/products/:id` `/projects` `/projects/:id` `/services` `/contact`

## Notes

- Products list shows 4 at a time with a "Show More" button (paginates in fours).
- Clicking any product or project card opens a detail page with a description; use the back link to return.
- Wood-grain swatches are done with an SVG turbulence filter (`#woodgrain` in `App.jsx`) rather than photography, so the site has no external image dependencies beyond the logo/icons.
