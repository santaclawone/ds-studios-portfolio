# DS Studios — Portfolio

A hand-crafted agency portfolio for DS Studios. Built with **Design Lang** — our declarative design language that compiles to CSS + JS Runtime.

## What's here

- **index.html** — single-page portfolio, all copy opinionated and punchy
- **ds-studios.dl** — Design Lang v1 component definitions
- **ds-studios-v2.dl** — Design Lang v2 component definitions
- **ds-studios.css / ds-studios-v2.css** — compiled Design Lang CSS
- **ds-studios.runtime.js / ds-studios-v2.runtime.js** — runtime for spring physics

## Design Lang components used

| Component | CSS Class | What it does |
|---|---|---|
| glass-nav | .dl-glass-nav | Fixed nav with backdrop blur |
| gradient-hero | .dl-gradient-hero | Green gradient text on hero heading |
| cta-primary | .dl-cta-primary | Main CTA with spring physics |
| cta-secondary | .dl-cta-secondary | Secondary CTA with spring physics |
| feature-card | .dl-feature-card | Glass card with spotlight overlay |
| portfolio-card | .dl-portfolio-card | Glass card with rounded morph |
| service-card | .dl-service-card | Glass card with spotlight |
| testimonial-card | .dl-testimonial-card | Glass card for quotes |
| input-glass | .dl-input-glass | Glass input with focus glow |
| textarea-glass | .dl-textarea-glass | Glass textarea with focus glow |
| section-title | .dl-section-title | Staggered fade-in for section headings |

## Deployment

Pushed to `main` → auto-deploys to GitHub Pages:
https://santaclawone.github.io/ds-studios-portfolio/

## Local dev

```bash
python3 -m http.server 8001
# Open http://localhost:8001/
```
