## ADDED Requirements

### Requirement: Installable Web App

The application SHALL be installable as a Progressive Web App on supported devices (desktop and mobile).

#### Scenario: Install prompt on desktop Chrome

- **WHEN** user visits the app on desktop Chrome
- **THEN** browser install prompt is available in the address bar

#### Scenario: Add to home screen on mobile

- **WHEN** user visits the app on mobile device
- **THEN** "Add to Home Screen" option is available

### Requirement: Offline Support

The application SHALL function offline after the initial load by caching all static assets.

#### Scenario: App loads without network

- **WHEN** user opens the installed app without network connection
- **THEN** the app UI loads completely from cache

#### Scenario: Core functionality works offline

- **WHEN** user creates SysEx operations while offline
- **THEN** the app generates and displays SysEx messages correctly

### Requirement: App Manifest

The application SHALL provide a valid Web App Manifest with required metadata.

#### Scenario: Manifest contains required fields

- **WHEN** the manifest is loaded
- **THEN** it includes name, short_name, icons, start_url, display, and theme_color

#### Scenario: App icons are available

- **WHEN** the app is installed
- **THEN** appropriate icons (192x192, 512x512) are displayed

### Requirement: PWA Meta Tags

The application SHALL include appropriate meta tags for PWA support on all platforms.

#### Scenario: iOS home screen support

- **WHEN** user adds app to home screen on iOS
- **THEN** the app runs in standalone mode with correct status bar style

#### Scenario: Theme color is applied

- **WHEN** app is viewed in browser or installed
- **THEN** browser chrome reflects the app's theme color
