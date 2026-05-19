# SamPro Premium Multi-Page Website

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```
Upload the `dist` folder to your hosting server.

## Important for deployment
This is a React/Vite SPA using clean routes like `/about-us`, `/companies`, `/contact`.
Configure your server to fallback all routes to `index.html`.

For Apache, an `.htaccess` file is included in `public` and copied into `dist` during build.
