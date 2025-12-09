# Tuner Operation Test Plan

## Target Feature

Verify tuner ON/OFF operation. Validate switch UI toggle functionality.

## Related Implementation

- `e2e/tuner/`

## SysEx Message Specification

| State | SysEx Message |
|-------|---------------|
| Tuner ON | `F0 52 00 6E 64 0B F7` |
| Tuner OFF | `F0 52 00 6E 64 0C F7` |

## Test Cases

### 4.1. should select Tuner operation and display ON by default

**File:** `e2e/tuner/tuner-default-on.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click operation type dropdown
3. Click 'Tuner' option
4. Verify dropdown shows 'Tuner'
5. Verify switch UI is visible with OFF/ON labels
6. Verify switch is in ON position (checked)
7. Verify SysEx output is 'F0 52 00 6E 64 0B F7'

**Expected Results:**
- Tuner operation is selected
- Switch UI is displayed for ON/OFF toggle
- Default state is ON
- SysEx output matches Tuner ON command

### 4.2. should toggle Tuner OFF

**File:** `e2e/tuner/tuner-toggle-off.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click operation type dropdown and select 'Tuner'
3. Verify switch is in ON position
4. Click switch to toggle to OFF
5. Verify switch is in OFF position (unchecked)
6. Verify SysEx output is 'F0 52 00 6E 64 0C F7'

**Expected Results:**
- Switch toggles from ON to OFF
- SysEx output changes to Tuner OFF command

### 4.3. should toggle Tuner ON again

**File:** `e2e/tuner/tuner-toggle-on-again.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click operation type dropdown and select 'Tuner'
3. Click switch to toggle to OFF
4. Verify SysEx output is 'F0 52 00 6E 64 0C F7'
5. Click switch to toggle back to ON
6. Verify switch is in ON position
7. Verify SysEx output is 'F0 52 00 6E 64 0B F7'

**Expected Results:**
- Switch can be toggled multiple times
- SysEx output updates correctly each time
