# Cloudflare Pages Deployment

Use Cloudflare Pages to deploy this Vite React website from GitHub.

## 1. Connect GitHub repository

1. Log in to Cloudflare.
2. Go to **Workers & Pages**.
3. Click **Create application**.
4. Select **Pages**.
5. Select **Connect to Git**.
6. Choose this repository:

```text
obiorareading-hue/speedmen-website
```

## 2. Build settings

Use these settings:

```text
Framework preset: Vite
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
```

## 3. Environment variables

No environment variables are required for the current static website.

## 4. Deploy

Click **Save and Deploy**.

Cloudflare will install dependencies, build the site and publish it.

## 5. Custom domain

After deployment:

1. Open the Cloudflare Pages project.
2. Go to **Custom domains**.
3. Add the official Speedmen domain or subdomain.
4. Follow Cloudflare DNS instructions.

## 6. Single-page routing

The file `public/_redirects` has been added so Cloudflare Pages can serve the React app correctly:

```text
/* /index.html 200
```

## 7. Update contact details before final launch

Open `src/App.jsx` and update the official phone number, email and office address before public launch.