# GoDaddy Hosting Guide

This website is a React and Vite static site. GoDaddy shared hosting should receive the built files from the dist folder.

## Download the repository

Use GitHub to download the repository ZIP, or clone it on your computer.

Repository:

obiorareading-hue/speedmen-website

## Build the website

Run these commands in the project folder:

npm install
npm run build

After the build, Vite will create a folder named dist.

## Upload to GoDaddy

1. Log in to GoDaddy.
2. Open your hosting dashboard.
3. Go to cPanel.
4. Open File Manager.
5. Go to public_html.
6. Upload the contents of the dist folder, not the dist folder itself.
7. Confirm that index.html is directly inside public_html.

## Routing support

The project includes public/.htaccess. When you run npm run build, it will be copied into dist/.htaccess. Upload it with the rest of the dist contents. It helps the React website work properly on Apache and GoDaddy hosting.

## Final checks

After upload, test the homepage, mobile menu, WhatsApp request form, contact buttons and all page sections.

## Contact details before launch

Open src/App.jsx and update the phone number, email and office address with the final official Speedmen Protection Limited details.