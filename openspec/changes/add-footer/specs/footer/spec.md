## ADDED Requirements

### Requirement: Footer Display

The app SHALL display a footer section at the bottom of the page.

#### Scenario: Footer is visible on page load
- **WHEN** user opens the app
- **THEN** a footer is visible at the bottom of the viewport

### Requirement: GitHub Link

The footer SHALL include a link to the GitHub repository.

#### Scenario: GitHub link navigation
- **WHEN** user clicks the GitHub link
- **THEN** browser opens https://github.com/RyoSogawa/zoom-multistomp-commander in a new tab

### Requirement: Author Link

The footer SHALL include a link to the author's profile.

#### Scenario: Author link navigation
- **WHEN** user clicks the author link
- **THEN** browser opens https://bento.me/ryo-sogawa in a new tab

### Requirement: Buy Me A Coffee Button

The footer SHALL include a Buy Me A Coffee button for donations.

#### Scenario: Support button display
- **WHEN** user views the footer
- **THEN** a Buy Me A Coffee button is visible

#### Scenario: Support button navigation
- **WHEN** user clicks the Buy Me A Coffee button
- **THEN** browser opens the Buy Me A Coffee page for RyoSogawa in a new tab
