# Patch Volume Operation Test Plan

## Target Feature

Verify patch volume adjustment (0-100) functionality. Validate slider and number input UI.

## Related Implementation

- `e2e/patch-volume/`

## SysEx Message Specification

| Value | SysEx Message |
|-------|---------------|
| 0 | `F0 52 00 6E 64 20 00 64 00 00 00 00 00 00 F7` |
| 50 (0x32) | `F0 52 00 6E 64 20 00 64 00 32 00 00 00 00 F7` |
| 100 (0x64) | `F0 52 00 6E 64 20 00 64 00 64 00 00 00 00 F7` |

## Test Cases

### 5.1. should select Patch Volume with default value 100

**File:** `e2e/patch-volume/patch-volume-default.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click operation type dropdown
3. Click 'Patch Volume' option
4. Verify dropdown shows 'Patch Volume'
5. Verify slider and number input are visible
6. Verify value is 100
7. Verify SysEx output is 'F0 52 00 6E 64 20 00 64 00 64 00 00 00 00 F7'

**Expected Results:**
- Patch Volume operation is selected
- Slider and number input UI is displayed
- Default value is 100
- SysEx output matches Patch Volume command with value 100 (0x64)

### 5.2. should change Patch Volume to 0

**File:** `e2e/patch-volume/patch-volume-zero.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click operation type dropdown and select 'Patch Volume'
3. Set value to 0 using number input
4. Verify slider position updates
5. Verify SysEx output is 'F0 52 00 6E 64 20 00 64 00 00 00 00 00 00 F7'

**Expected Results:**
- Value changes to 0
- Slider syncs with number input
- SysEx output reflects value 0

### 5.3. should change Patch Volume to 50

**File:** `e2e/patch-volume/patch-volume-fifty.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click operation type dropdown and select 'Patch Volume'
3. Set value to 50 using number input
4. Verify slider position updates
5. Verify SysEx output is 'F0 52 00 6E 64 20 00 64 00 32 00 00 00 00 F7'

**Expected Results:**
- Value changes to 50
- Slider syncs with number input
- SysEx output reflects value 50 (0x32)
