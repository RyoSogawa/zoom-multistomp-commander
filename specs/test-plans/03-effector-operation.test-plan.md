# Effector Operation Test Plan

## Target Feature

Verify effector operation types (ON/OFF/Display) and number selection (1-6) functionality.

## Related Implementation

- `e2e/operation-type/`
- `e2e/effect-number/`

## Test Cases

### Operation Type Selection

#### 3.1. should change operation type to OFF

**File:** `e2e/operation-type/change-to-off.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click the operation type dropdown
3. Verify 'ON', 'OFF', and 'Display' options are visible
4. Click 'OFF' option
5. Verify dropdown shows 'OFF'
6. Verify SysEx output is updated

**Expected Results:**
- Dropdown shows all three operation types
- Operation type changes to 'OFF'
- SysEx output reflects the OFF command

#### 3.2. should change operation type to Display

**File:** `e2e/operation-type/change-to-display.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click the operation type dropdown
3. Click 'Display' option
4. Verify dropdown shows 'Display'
5. Verify SysEx output is updated

**Expected Results:**
- Operation type changes to 'Display'
- SysEx output reflects the Display command
- Output format matches Display command structure

#### 3.3. should change operation type back to ON

**File:** `e2e/operation-type/change-to-on.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click the operation type dropdown
3. Click 'OFF' option
4. Click the operation type dropdown again
5. Click 'ON' option
6. Verify dropdown shows 'ON'
7. Verify SysEx output is updated

**Expected Results:**
- Operation type changes back to 'ON'
- SysEx output reflects the ON command
- Changes are reversible

### Effect Number Selection

#### 3.4. should select effect number 1

**File:** `e2e/effect-number/select-effect-1.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click effect number '1' button
3. Verify button '1' is highlighted/active
4. Verify SysEx output is updated

**Expected Results:**
- Effect number 1 is selected
- Button appears active
- SysEx output reflects effect number 1

#### 3.5. should select effect number 6

**File:** `e2e/effect-number/select-effect-6.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click effect number '6' button
3. Verify button '6' is highlighted/active
4. Verify SysEx output is updated

**Expected Results:**
- Effect number 6 is selected
- Button appears active
- SysEx output reflects effect number 6

#### 3.6. should select all effect numbers sequentially

**File:** `e2e/effect-number/select-all-effects.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click effect number '6' button and verify output
3. Click effect number '5' button and verify output
4. Click effect number '4' button and verify output
5. Click effect number '3' button and verify output
6. Click effect number '2' button and verify output
7. Click effect number '1' button and verify output

**Expected Results:**
- Each effect number can be selected
- Selection is mutually exclusive (only one active at a time)
- SysEx output changes for each selection
- All effect numbers (1-6) are functional

#### 3.7. should change effect number multiple times

**File:** `e2e/effect-number/change-effect-multiple-times.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click effect number '3' button
3. Verify SysEx output
4. Click effect number '5' button
5. Verify SysEx output changed
6. Click effect number '2' button
7. Verify SysEx output changed again

**Expected Results:**
- Effect number can be changed multiple times
- Each change updates the SysEx output
- Previous selection is deselected when new one is chosen
