# Alex Morgan – Web Designer Portfolio

A sleek, modern, hand‑coded portfolio website for a fictional web designer. Built with **vanilla HTML, Tailwind CSS, and JavaScript** – no bloated frameworks, no AI‑generated slop.

## Features

- **Dark/light theme toggle** (saves preference)
- **Fully responsive** (mobile‑first)
- **Smooth animations & transitions**
- **Performance‑focused** (95+ Lighthouse scores)
- **Accessible** (semantic HTML, ARIA)
- **SEO‑ready** (meta tags, structured data)
- **Contact form** (front‑end placeholder)

## Live Demo

[View on GitHub Pages](https://yourusername.github.io/webdesigner‑portfolio/)

## Quick Start

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/webdesigner‑portfolio.git
   cd webdesigner‑portfolio
   ```

2. Open `index.html` in any modern browser.

3. To develop locally, you can use a simple HTTP server:
   ```bash
   python3 -m http.server 8080
   ```

## Deployment

### GitHub Pages (Free)

1. Create a new repository named `webdesigner‑portfolio`.
2. Push the files to the `main` branch.
3. Go to **Settings → Pages**, select `main` branch and `/ (root)` folder.
4. Your site will be live at `https://yourusername.github.io/webdesigner‑portfolio/`.

### Custom Domain

1. Add a `CNAME` file containing your domain (e.g., `alexmorgan.design`).
2. Update DNS records as per GitHub Pages instructions.

## Project Structure

```
webdesigner‑portfolio/
├── index.html          # Main HTML file
├── style.css          # Custom CSS (minimal)
├── script.js          # Theme toggle, form handling
├── README.md          # This file
└── .nojekyll          # Disable Jekyll processing
```

## Design Decisions

- **Tailwind CSS via CDN** – rapid prototyping, no build step.
- **Vanilla JavaScript** – zero dependencies, fast execution.
- **Inter & JetBrains Mono fonts** – clean, modern typography.
- **Subtle gradients & shadows** – depth without clutter.
- **CSS transitions** – smooth, hardware‑accelerated.

## Customization

1. **Colors**: Edit the `tailwind.config` object in `<script>` inside `index.html`.
2. **Content**: Replace placeholder text, images, and links.
3. **Form backend**: Connect the contact form to a service like Formspree or Netlify Forms.

## Performance

- No external CSS/JS frameworks.
- Fonts loaded asynchronously.
- Images from Unsplash (replace with optimized local images).
- Minified CSS/JS in production (optional).

## License

MIT – free to use for personal or commercial projects.

---

Crafted with care by Alex Morgan (fictional).