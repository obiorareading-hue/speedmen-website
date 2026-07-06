# Deployment Guide

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Launch on Vercel

1. Open Vercel and import this GitHub repository: `obiorareading-hue/speedmen-website`.
2. Framework preset: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy.

## Connect domain

After deployment, add your domain in the Vercel project settings and update DNS records as directed by Vercel.

## Update WhatsApp number

Open `src/App.jsx` and edit:

```js
const phone = '2348083790550';
```

Replace with the official Speedmen WhatsApp number.