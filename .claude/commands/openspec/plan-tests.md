---
name: OpenSpec: Plan Tests
description: Create E2E test plan from approved OpenSpec proposal using Playwright.
category: OpenSpec
tags: [openspec, test, playwright]
---
<!-- OPENSPEC:START -->
**Guardrails**
- This command should be run AFTER the proposal is approved and BEFORE implementation (apply).
- The test plan is derived from the proposal's spec deltas and requirements.
- Save test plan to `changes/<id>/test-plan.md` for traceability.

**Steps**
1. Read `changes/<id>/proposal.md` and spec deltas in `changes/<id>/specs/` to understand what needs to be tested.
2. Review existing specs in `openspec/specs/` to understand current behavior that should be preserved.
3. Use the Task tool with `subagent_type: playwright-test-planner` to:
   - Navigate to the application
   - Analyze the UI based on the spec requirements
   - Create a comprehensive test plan covering all ADDED/MODIFIED requirements
4. Save the generated test plan to `changes/<id>/test-plan.md` using `mcp__playwright-test__planner_save_plan`.
5. Update `tasks.md` to include test implementation tasks referencing the test plan.

**Test Plan Structure**
The test plan should map directly to OpenSpec requirements:
- Each ADDED requirement → New test suite
- Each MODIFIED requirement → Updated test cases
- Each Scenario in the spec → At least one test case

**Reference**
- Use `openspec show <id> --json --deltas-only` to extract requirement details.
- The test plan file name should follow: `tests/<capability>/<test-name>.spec.ts`
<!-- OPENSPEC:END -->