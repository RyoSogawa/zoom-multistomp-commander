# Initial State Test Plan

## Target Feature

Verify the application's initial display state.

## Related Implementation

- `e2e/initial-state/`

## Test Cases

### 1.1. should display correct initial state

**File:** `e2e/initial-state/initial-state.spec.ts`

**Steps:**
1. Navigate to http://localhost:3000
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
