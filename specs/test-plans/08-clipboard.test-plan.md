# Clipboard Test Plan

## Target Feature

Verify clipboard copy functionality.

## Related Implementation

- `e2e/clipboard/`

## Test Cases

### 8.1. should copy output to clipboard

**File:** `e2e/clipboard/copy-to-clipboard.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Note the SysEx output text
3. Click 'Copy to Clipboard' button
4. Verify button text changes to 'Copied!'
5. Verify clipboard contains the SysEx output

**Expected Results:**
- Button provides visual feedback on click
- Button text changes to 'Copied!'
- Clipboard contains exact SysEx output text
- Copy operation succeeds

### 8.2. should show button state change on copy

**File:** `e2e/clipboard/copy-button-feedback.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click 'Copy to Clipboard' button
3. Verify button text is 'Copied!'
4. Wait for button to reset
5. Verify button text returns to 'Copy to Clipboard'

**Expected Results:**
- Button shows 'Copied!' after successful copy
- Button resets to 'Copy to Clipboard' after timeout
- User receives clear feedback about copy state

### 8.3. should copy updated output after changes

**File:** `e2e/clipboard/copy-after-changes.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Configure operation (ON, effect 3)
3. Click 'Copy to Clipboard' button
4. Verify clipboard has first output
5. Change to different configuration (OFF, effect 5)
6. Wait for button to reset to 'Copy to Clipboard'
7. Click 'Copy to Clipboard' button again
8. Verify clipboard has updated output

**Expected Results:**
- Clipboard contains current output
- Each copy operation captures latest state
- Previous clipboard content is replaced

### 8.4. should copy multiple operations output

**File:** `e2e/clipboard/copy-multiple-operations.spec.ts`

**Steps:**
1. Click '+ Add Operation' button three times
2. Configure each operation differently
3. Note the complete SysEx output with all operations
4. Click 'Copy to Clipboard' button
5. Verify clipboard contains all SysEx messages

**Expected Results:**
- All operations are included in clipboard
- Output format matches what is displayed
- All messages are properly formatted and separated
