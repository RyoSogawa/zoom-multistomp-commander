# SysEx Output Display Test Plan

## Target Feature

Verify SysEx output display and update functionality.

## Related Implementation

- `e2e/output-display/`

## Test Cases

### 7.1. should display correct output for ON operation

**File:** `e2e/output-display/output-on-operation.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Verify operation type is 'ON'
3. Click effect number '1' button
4. Verify SysEx output starts with 'F0 52 00 6E 64 20'
5. Verify SysEx output ends with 'F7'
6. Verify output contains proper ON command bytes

**Expected Results:**
- Output shows valid SysEx format
- Output includes standard ZOOM SysEx header
- Output includes proper terminator (F7)
- Command reflects ON operation

### 7.2. should display correct output for OFF operation

**File:** `e2e/output-display/output-off-operation.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click operation type dropdown and select 'OFF'
3. Click effect number '3' button
4. Verify SysEx output reflects OFF command
5. Verify output format is valid

**Expected Results:**
- Output shows valid SysEx format for OFF
- Command bytes differ from ON operation
- Effect number is correctly encoded

### 7.3. should display correct output for Display operation

**File:** `e2e/output-display/output-display-operation.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click operation type dropdown and select 'Display'
3. Click effect number '4' button
4. Verify SysEx output reflects Display command
5. Verify output contains '64' byte (Display command marker)

**Expected Results:**
- Output shows valid SysEx format for Display
- Command includes Display-specific bytes
- Effect number is correctly encoded

### 7.4. should display concatenated output for multiple operations

**File:** `e2e/output-display/output-multiple-operations.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Configure first operation (ON, effect 6)
3. Note the first SysEx message
4. Click '+ Add Operation' button
5. Configure second operation (OFF, effect 2)
6. Verify output contains both messages
7. Verify messages are properly separated
8. Click '+ Add Operation' button
9. Configure third operation (Display, effect 4)
10. Verify output contains all three messages in order

**Expected Results:**
- Multiple SysEx messages are concatenated
- Messages appear in the order operations were configured
- Each message is complete and valid
- Messages are separated by newlines

### 7.5. should update output when operation changes

**File:** `e2e/output-display/output-updates-on-change.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Note the initial SysEx output
3. Change operation type to 'OFF'
4. Verify output changes
5. Change effect number to '5'
6. Verify output changes again
7. Change operation type to 'Display'
8. Verify output changes to reflect Display command

**Expected Results:**
- Output updates in real-time
- Each change immediately reflects in output
- Output always matches current operation configuration
