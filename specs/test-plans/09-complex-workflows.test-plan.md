# Complex Workflows Test Plan

## Target Feature

Verify complex workflows and state consistency.

## Related Implementation

- `e2e/workflows/`

## Test Cases

### 9.1. should handle complete workflow

**File:** `e2e/workflows/complete-workflow.spec.ts`

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

### 9.2. should maintain state consistency

**File:** `e2e/workflows/state-consistency.spec.ts`

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
