# Tempo Operation Test Plan

## Target Feature

Verify tempo/BPM setting (40-250) functionality. Validate slider and number input UI.

## Related Implementation

- `e2e/tempo/`

## SysEx Message Specification

BPM is represented in 2 bytes (low byte, high byte). Split into 7 bits each.

| BPM | Low Byte | High Byte | SysEx Message |
|-----|----------|-----------|---------------|
| 40 (0x28) | 0x28 | 0x00 | `F0 52 00 6E 64 20 00 64 02 28 00 00 00 00 F7` |
| 120 (0x78) | 0x78 | 0x00 | `F0 52 00 6E 64 20 00 64 02 78 00 00 00 00 F7` |
| 250 | 0x7A (122) | 0x01 | `F0 52 00 6E 64 20 00 64 02 7A 01 00 00 00 F7` |

## Test Cases

### 6.1. should select Tempo with default value 120 BPM

**File:** `e2e/tempo/tempo-default.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click operation type dropdown
3. Click 'Tempo' option
4. Verify dropdown shows 'Tempo'
5. Verify slider, number input, and 'BPM' label are visible
6. Verify value is 120
7. Verify SysEx output is 'F0 52 00 6E 64 20 00 64 02 78 00 00 00 00 F7'

**Expected Results:**
- Tempo operation is selected
- Slider, number input, and BPM label are displayed
- Default value is 120 BPM
- SysEx output matches Tempo command with BPM 120 (0x78 = 120)

### 6.2. should change Tempo to minimum 40 BPM

**File:** `e2e/tempo/tempo-min.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click operation type dropdown and select 'Tempo'
3. Set value to 40 using number input
4. Verify slider position updates
5. Verify SysEx output is 'F0 52 00 6E 64 20 00 64 02 28 00 00 00 00 F7'

**Expected Results:**
- Value changes to 40
- Slider syncs with number input
- SysEx output reflects BPM 40 (0x28)

### 6.3. should change Tempo to maximum 250 BPM

**File:** `e2e/tempo/tempo-max.spec.ts`

**Steps:**
1. Click '+ Add Operation' button
2. Click operation type dropdown and select 'Tempo'
3. Set value to 250 using number input
4. Verify slider position updates
5. Verify SysEx output is 'F0 52 00 6E 64 20 00 64 02 7A 01 00 00 00 F7'

**Expected Results:**
- Value changes to 250
- Slider syncs with number input
- SysEx output reflects BPM 250 (low byte: 0x7A = 122, high byte: 0x01)
