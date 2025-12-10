# help-modal Specification

## Purpose
TBD - created by archiving change add-help-modal. Update Purpose after archive.
## Requirements
### Requirement: Help Button Display

The app SHALL display a help button ("?") near the app title.

#### Scenario: Help button is visible on page load
- **WHEN** user opens the app
- **THEN** a "?" button is visible next to the title "ZOOM MultiStomp Commander"

### Requirement: Help Modal Display

The app SHALL display a modal with app information when the help button is clicked.

#### Scenario: Open help modal
- **WHEN** user clicks the "?" button
- **THEN** a modal opens with app description and usage information

#### Scenario: Close help modal
- **WHEN** user clicks outside the modal or clicks a close button
- **THEN** the modal closes

### Requirement: Help Modal Content

The help modal SHALL contain the following information in friendly English:

- App purpose: SysEx command generator for ZOOM MultiStomp series
- Usage: For registering commands in MIDI controllers like M-VAVE Chocolate
- Support: GitHub link for feature requests and bug reports
- Donation: Buy Me A Coffee link

#### Scenario: Help modal content is displayed
- **WHEN** user views the help modal
- **THEN** all required information sections are visible

