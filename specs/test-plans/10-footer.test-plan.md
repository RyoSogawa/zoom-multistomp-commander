# Footer Tests

## Application Overview

Test plan for the footer feature that includes GitHub link, author profile link, and Buy Me A Coffee button.

## Test Scenarios

### 1. Footer Display

**Seed:** `e2e/seed.spec.ts`

#### 1.1. should display footer on page load

**File:** `e2e/footer/footer-visible.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3001/
  2. Scroll to bottom of page if needed

**Expected Results:**
  - Footer section is visible at the bottom of the page
  - Footer contains GitHub icon/link
  - Footer contains author name/link
  - Footer contains Buy Me A Coffee button

### 2. Footer Links

**Seed:** `e2e/seed.spec.ts`

#### 2.1. should open GitHub repository in new tab

**File:** `e2e/footer/github-link.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3001/
  2. Click on the GitHub link in the footer

**Expected Results:**
  - New tab opens with URL https://github.com/RyoSogawa/zoom-multistomp-commander

#### 2.2. should open author profile in new tab

**File:** `e2e/footer/author-link.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3001/
  2. Click on the author link in the footer

**Expected Results:**
  - New tab opens with URL https://bento.me/ryo-sogawa

#### 2.3. should open Buy Me A Coffee page in new tab

**File:** `e2e/footer/buymeacoffee-link.spec.ts`

**Steps:**
  1. Navigate to http://localhost:3001/
  2. Click on the Buy Me A Coffee button in the footer

**Expected Results:**
  - New tab opens with Buy Me A Coffee page for RyoSogawa
