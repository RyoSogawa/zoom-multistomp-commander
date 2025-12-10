# Change: Add Footer with GitHub, Author, and Support Links

## Why

Users need a way to:
- Access the source code on GitHub
- Learn about the project author
- Support the project through donations

Currently the app has no footer section.

## What Changes

- Add a footer component with three links:
  - GitHub repository link
  - Author profile link (bento.me)
  - Buy Me A Coffee button for donations

## Impact

- Affected specs: `footer` (new capability)
- Affected code: `src/App.tsx`, new `src/components/Footer.tsx`
