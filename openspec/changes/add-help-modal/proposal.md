# Change: Add Help Modal with App Description

## Why

Users need to understand what this app does and how to use it. A help button near the title provides quick access to this information.

## What Changes

- Add a "?" button next to the app title
- Clicking the button opens a modal with:
  - App description (SysEx command generator for ZOOM MultiStomp)
  - Usage guidance (for MIDI controllers like M-VAVE Chocolate)
  - Links to GitHub for feature requests/bugs
  - Support link (Buy Me A Coffee)

## Impact

- Affected specs: `help-modal` (new capability)
- Affected code: `src/App.tsx`, new modal component
