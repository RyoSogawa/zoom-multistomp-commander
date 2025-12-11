# Change: Add PWA Support

## Why

Enable users to install the app on their home screen and use it offline. This is essential for live venues and rehearsal studios where network connectivity may be unreliable.

## What Changes

- Integrate vite-plugin-pwa to auto-generate Service Worker
- Configure Web App Manifest for installability
- Add app icons (192x192, 512x512)
- Add PWA meta tags to index.html
- Enable offline caching for all static assets

## Impact

- Affected specs: New `pwa` capability
- Affected code:
  - `vite.config.ts` - Add PWA plugin
  - `index.html` - Add meta tags
  - `public/` - Add icon files
