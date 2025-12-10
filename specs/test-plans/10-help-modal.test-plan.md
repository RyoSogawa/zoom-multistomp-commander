# Help Modal Tests

## Application Overview

Test plan for the help modal feature that displays app information when the "?" button is clicked.

## Test Scenarios

### 1. Help Button Display

**Seed:** `e2e/seed.spec.ts`

#### 1.1. should display help button next to title

**File:** `e2e/help-modal/help-button-visible.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3001/

**Expected Results:**
  - A '?' button is visible next to the title 'ZOOM MultiStomp Commander'

### 2. Help Modal Interaction

**Seed:** `e2e/seed.spec.ts`

#### 2.1. should open help modal when clicking help button

**File:** `e2e/help-modal/open-modal.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3001/
  2. Click the '?' help button

**Expected Results:**
  - Help modal opens
  - Modal contains app description text
  - Modal contains GitHub link
  - Modal contains Buy Me A Coffee link

#### 2.2. should close help modal when clicking outside

**File:** `e2e/help-modal/close-modal-outside.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3001/
  2. Click the '?' help button
  3. Click outside the modal

**Expected Results:**
  - Help modal closes

#### 2.3. should close help modal when clicking close button

**File:** `e2e/help-modal/close-modal-button.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3001/
  2. Click the '?' help button
  3. Click the close button in the modal

**Expected Results:**
  - Help modal closes
