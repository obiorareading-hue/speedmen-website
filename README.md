# Speedmen Protection Limited Website

Production-ready corporate website for Speedmen Protection Limited, a private security company.

## Status

The full website files are prepared locally in:

`C:\Users\coone\Documents\Codex`

Because this Codex environment cannot launch local `git` or `npm` commands, use the included helper script to push the full site assets from the local machine.

## Push Full Website To GitHub

From the project folder, run:

```bat
push-to-github.bat
```

Or in PowerShell:

```powershell
.\push-to-github.ps1
```

This will initialize Git if needed, commit the website, and push to:

`https://github.com/obiorareading-hue/speedmen-website`

## Local Preview

```bash
npm run dev
```

Then open:

`http://127.0.0.1:4183/`

## Cloudflare Deploy

```bash
npm install
npx wrangler login
npm run deploy:cloudflare:prod
```
