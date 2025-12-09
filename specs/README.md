# ZOOM MultiStomp Commander Test Plans

## Overview

E2E test plans for ZOOM MultiStomp Commander.
Test plans are organized by feature in separate files.

## Application Overview

ZOOM MultiStomp Commander is a web application that generates SysEx commands for ZOOM MultiStomp effect pedals.

### Supported Operation Types

| Operation Type | Description | UI |
|----------------|-------------|-----|
| **Effector ON/OFF/Display** | Toggle or display effect slots 1-6 | Number buttons |
| **Tuner** | Enable/disable tuner | Switch |
| **Patch Volume** | Set patch volume 0-100 | Slider + number input |
| **Tempo** | Set tempo/BPM 40-250 | Slider + number input |

## Test Plan Index

| # | File | Description | Tests |
|---|------|-------------|-------|
| 1 | [01-initial-state](test-plans/01-initial-state.test-plan.md) | Initial state | 1 |
| 2 | [02-operation-management](test-plans/02-operation-management.test-plan.md) | Add, delete, clear operations | 8 |
| 3 | [03-effector-operation](test-plans/03-effector-operation.test-plan.md) | Effector type and number selection | 7 |
| 4 | [04-tuner-operation](test-plans/04-tuner-operation.test-plan.md) | Tuner operation | 3 |
| 5 | [05-patch-volume-operation](test-plans/05-patch-volume-operation.test-plan.md) | Patch volume operation | 3 |
| 6 | [06-tempo-operation](test-plans/06-tempo-operation.test-plan.md) | Tempo operation | 3 |
| 7 | [07-sysex-output](test-plans/07-sysex-output.test-plan.md) | SysEx output display | 5 |
| 8 | [08-clipboard](test-plans/08-clipboard.test-plan.md) | Clipboard functionality | 4 |
| 9 | [09-complex-workflows](test-plans/09-complex-workflows.test-plan.md) | Complex workflows | 2 |

**Total: 36 test cases**

## E2E Test Implementation

Test implementations are organized by feature in `e2e/` directory:

```
e2e/
├── add-operation/
├── clear-all/
├── clipboard/
├── delete-operation/
├── effect-number/
├── initial-state/
├── operation-type/
├── output-display/
├── patch-volume/      # To be added
├── tempo/             # To be added
├── tuner/             # To be added
└── workflows/
```

## Adding New Features

1. Create change proposal in `openspec/changes/`
2. Update or create test plan file in `specs/test-plans/`
3. Add corresponding test implementation in `e2e/`
4. Run tests to verify
