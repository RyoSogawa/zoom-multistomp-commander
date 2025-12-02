# ZOOM MultiStomp Commander Test Plan

## Application Overview

ZOOM MultiStomp Commander is a web application that generates SysEx commands for ZOOM MultiStomp effect pedals. Users can add multiple operations with different types (ON/OFF/Display) and effect numbers (1-6), and the application generates the corresponding SysEx output that can be copied to clipboard.

## Test Scenarios

### 1. Initial State

**Seed:** `tests/seed.spec.ts`

#### 1.1. should display correct initial state

**File:** `tests/initial-state/initial-state.spec.ts`

**Steps:**
  1. Navigate to http://localhost:5173
  2. Verify page title is 'ZOOM MultiStomp Commander'
  3. Verify 'Operations' heading is visible
  4. Verify '+ Add Operation' button is visible
  5. Verify 'Clear All' button is NOT visible
  6. Verify 'Output' section is NOT visible

**Expected Results:**
  - Application loads successfully
  - No operations are present initially
  - Only the '+ Add Operation' button is shown in the Operations section
  - No SysEx output is displayed

### 2. Add Operation

**Seed:** `tests/seed.spec.ts`

#### 2.1. should add first operation

**File:** `tests/add-operation/add-first-operation.spec.ts`

**Steps:**
  1. Click '+ Add Operation' button
  2. Verify operation is added with default values
  3. Verify operation type dropdown shows 'ON'
  4. Verify all effect number buttons (1-6) are visible
  5. Verify delete button (×) is visible
  6. Verify 'Clear All' button appears
  7. Verify 'Output' section appears
  8. Verify SysEx output is displayed

**Expected Results:**
  - First operation is added successfully
  - Default operation type is 'ON'
  - Default effect number appears to be 1 (based on output)
  - 'Clear All' button becomes visible
  - Output section shows valid SysEx message

#### 2.2. should add multiple operations

**File:** `tests/add-operation/add-multiple-operations.spec.ts`

**Steps:**
  1. Click '+ Add Operation' button
  2. Click '+ Add Operation' button again
  3. Click '+ Add Operation' button a third time
  4. Verify three operations are displayed
  5. Verify each operation has its own controls
  6. Verify SysEx output contains three messages

**Expected Results:**
  - Multiple operations can be added
  - Each operation maintains its own state
  - Each operation has independent controls
  - SysEx output includes all operations in sequence

### 3. Operation Type Selection

**Seed:** `tests/seed.spec.ts`

#### 3.1. should change operation type to OFF

**File:** `tests/operation-type/change-to-off.spec.ts`

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

**File:** `tests/operation-type/change-to-display.spec.ts`

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

**File:** `tests/operation-type/change-to-on.spec.ts`

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

### 4. Effect Number Selection

**Seed:** `tests/seed.spec.ts`

#### 4.1. should select effect number 1

**File:** `tests/effect-number/select-effect-1.spec.ts`

**Steps:**
  1. Click '+ Add Operation' button
  2. Click effect number '1' button
  3. Verify button '1' is highlighted/active
  4. Verify SysEx output is updated

**Expected Results:**
  - Effect number 1 is selected
  - Button appears active
  - SysEx output reflects effect number 1

#### 4.2. should select effect number 6

**File:** `tests/effect-number/select-effect-6.spec.ts`

**Steps:**
  1. Click '+ Add Operation' button
  2. Click effect number '6' button
  3. Verify button '6' is highlighted/active
  4. Verify SysEx output is updated

**Expected Results:**
  - Effect number 6 is selected
  - Button appears active
  - SysEx output reflects effect number 6

#### 4.3. should select all effect numbers sequentially

**File:** `tests/effect-number/select-all-effects.spec.ts`

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

#### 4.4. should change effect number multiple times

**File:** `tests/effect-number/change-effect-multiple-times.spec.ts`

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

### 5. Delete Operation

**Seed:** `tests/seed.spec.ts`

#### 5.1. should delete single operation

**File:** `tests/delete-operation/delete-single-operation.spec.ts`

**Steps:**
  1. Click '+ Add Operation' button
  2. Verify operation is added and Output section is visible
  3. Click the delete button (×)
  4. Verify operation is removed
  5. Verify 'Clear All' button is no longer visible
  6. Verify 'Output' section is no longer visible

**Expected Results:**
  - Operation is successfully deleted
  - UI returns to initial state
  - No operations remain
  - Output section is hidden

#### 5.2. should delete first operation in multiple operations

**File:** `tests/delete-operation/delete-first-operation.spec.ts`

**Steps:**
  1. Click '+ Add Operation' button twice to create two operations
  2. Configure first operation (e.g., ON, effect 6)
  3. Configure second operation (e.g., OFF, effect 2)
  4. Note the SysEx output
  5. Click delete button (×) on the first operation
  6. Verify first operation is removed
  7. Verify second operation remains
  8. Verify SysEx output shows only second operation

**Expected Results:**
  - First operation is deleted
  - Second operation remains intact
  - Output shows only remaining operation
  - 'Clear All' button is still visible

#### 5.3. should delete middle operation in multiple operations

**File:** `tests/delete-operation/delete-middle-operation.spec.ts`

**Steps:**
  1. Click '+ Add Operation' button three times
  2. Configure each operation differently
  3. Click delete button (×) on the second operation
  4. Verify second operation is removed
  5. Verify first and third operations remain
  6. Verify SysEx output shows first and third operations only

**Expected Results:**
  - Middle operation is deleted
  - Other operations remain intact
  - Output reflects remaining operations in correct order

#### 5.4. should delete last operation in multiple operations

**File:** `tests/delete-operation/delete-last-operation.spec.ts`

**Steps:**
  1. Click '+ Add Operation' button three times
  2. Configure each operation differently
  3. Click delete button (×) on the third operation
  4. Verify third operation is removed
  5. Verify first and second operations remain
  6. Verify SysEx output shows first and second operations only

**Expected Results:**
  - Last operation is deleted
  - Other operations remain intact
  - Output reflects remaining operations

### 6. Clear All Operations

**Seed:** `tests/seed.spec.ts`

#### 6.1. should clear all operations with single operation

**File:** `tests/clear-all/clear-single-operation.spec.ts`

**Steps:**
  1. Click '+ Add Operation' button
  2. Verify operation is added
  3. Click 'Clear All' button
  4. Verify all operations are removed
  5. Verify 'Clear All' button is no longer visible
  6. Verify 'Output' section is no longer visible
  7. Verify only '+ Add Operation' button remains

**Expected Results:**
  - All operations are cleared
  - UI returns to initial state
  - Application is ready to add new operations

#### 6.2. should clear all operations with multiple operations

**File:** `tests/clear-all/clear-multiple-operations.spec.ts`

**Steps:**
  1. Click '+ Add Operation' button three times
  2. Configure each operation differently
  3. Verify all three operations are visible
  4. Click 'Clear All' button
  5. Verify all operations are removed
  6. Verify UI returns to initial state

**Expected Results:**
  - All operations are cleared regardless of count
  - No operations remain
  - Output section is hidden
  - 'Clear All' button is hidden

### 7. SysEx Output Display

**Seed:** `tests/seed.spec.ts`

#### 7.1. should display correct output for ON operation

**File:** `tests/output-display/output-on-operation.spec.ts`

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

#### 7.2. should display correct output for OFF operation

**File:** `tests/output-display/output-off-operation.spec.ts`

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

#### 7.3. should display correct output for Display operation

**File:** `tests/output-display/output-display-operation.spec.ts`

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

#### 7.4. should display concatenated output for multiple operations

**File:** `tests/output-display/output-multiple-operations.spec.ts`

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
  - Messages are space-separated

#### 7.5. should update output when operation changes

**File:** `tests/output-display/output-updates-on-change.spec.ts`

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

### 8. Clipboard Copy

**Seed:** `tests/seed.spec.ts`

#### 8.1. should copy output to clipboard

**File:** `tests/clipboard/copy-to-clipboard.spec.ts`

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

#### 8.2. should show button state change on copy

**File:** `tests/clipboard/copy-button-feedback.spec.ts`

**Steps:**
  1. Click '+ Add Operation' button
  2. Click 'Copy to Clipboard' button
  3. Verify button text is 'Copied!'
  4. Change operation type or effect number
  5. Verify button text returns to 'Copy to Clipboard'

**Expected Results:**
  - Button shows 'Copied!' after successful copy
  - Button resets to 'Copy to Clipboard' when output changes
  - User receives clear feedback about copy state

#### 8.3. should copy updated output after changes

**File:** `tests/clipboard/copy-after-changes.spec.ts`

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

#### 8.4. should copy multiple operations output

**File:** `tests/clipboard/copy-multiple-operations.spec.ts`

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

### 9. Complex Workflows

**Seed:** `tests/seed.spec.ts`

#### 9.1. should handle complete workflow

**File:** `tests/workflows/complete-workflow.spec.ts`

**Steps:**
  1. Add three operations
  2. Configure first: ON, effect 6
  3. Configure second: OFF, effect 3
  4. Configure third: Display, effect 1
  5. Verify output shows all three operations
  6. Copy to clipboard
  7. Delete second operation
  8. Verify output updates to show two operations
  9. Add a new operation
  10. Configure new operation: ON, effect 4
  11. Copy updated output to clipboard
  12. Clear all operations
  13. Verify UI returns to initial state

**Expected Results:**
  - All operations work together seamlessly
  - Changes reflect immediately in output
  - Clipboard operations succeed at each step
  - Delete and add operations maintain proper state
  - Clear all resets application completely

#### 9.2. should maintain state consistency

**File:** `tests/workflows/state-consistency.spec.ts`

**Steps:**
  1. Add operation and configure as OFF, effect 2
  2. Add second operation and configure as Display, effect 5
  3. Change first operation to ON, effect 3
  4. Verify second operation remains Display, effect 5
  5. Delete first operation
  6. Verify second operation still shows Display, effect 5
  7. Add new operation
  8. Verify new operation has default values (ON, effect 1)
  9. Verify previous operation unchanged

**Expected Results:**
  - Each operation maintains independent state
  - Changes to one operation don't affect others
  - Deletions don't corrupt other operations
  - New operations have proper default values
