# BirthdayCard

A cinematic, interactive birthday surprise built with **Three.js** and Vite.

## Includes

- A private-share opening curtain and deliberate surprise reveal
- Film-inspired photo journey using the supplied memories
- Interactive 3D avatar stage with drag-to-explore controls
- WebGL fallback characters if generated GLB assets are unavailable
- Ambient sound toggle, confetti finale, responsive layout, reduced-motion support, and replay

## Run locally

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

Do not double-click `index.html` or open it with a `file://` URL; Vite must serve the ES modules and local assets.

The 3D avatar files live in `public/models/` and the supplied photos live in `public/assets/`.
