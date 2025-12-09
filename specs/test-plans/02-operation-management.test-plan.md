# Operation Management Test Plan

## Target Feature

Verify add, delete, and clear all operations functionality.

## Related Implementation

- `e2e/add-operation/`
- `e2e/delete-operation/`
- `e2e/clear-all/`

## Test Cases

### 2.1. should add first operation

**File:** `e2e/add-operation/add-first-operation.spec.ts`

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

### 2.2. should add multiple operations

**File:** `e2e/add-operation/add-multiple-operations.spec.ts`

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

### 2.3. should delete single operation

**File:** `e2e/delete-operation/delete-single-operation.spec.ts`

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

### 2.4. should delete first operation in multiple operations

**File:** `e2e/delete-operation/delete-first-operation.spec.ts`

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

### 2.5. should delete middle operation in multiple operations

**File:** `e2e/delete-operation/delete-middle-operation.spec.ts`

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

### 2.6. should delete last operation in multiple operations

**File:** `e2e/delete-operation/delete-last-operation.spec.ts`

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

### 2.7. should clear all operations with single operation

**File:** `e2e/clear-all/clear-single-operation.spec.ts`

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

### 2.8. should clear all operations with multiple operations

**File:** `e2e/clear-all/clear-multiple-operations.spec.ts`

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
