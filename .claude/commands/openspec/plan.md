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
- Save test plan to `specs/test-plans/<nn>-<capability>.test-plan.md` for long-term storage.

**Steps**
1. Read `changes/<id>/proposal.md` and spec deltas in `changes/<id>/specs/` to understand what needs to be tested.
2. Review existing specs in `openspec/specs/` to understand current behavior that should be preserved.
3. Check existing test plans in `specs/test-plans/` to determine the next sequence number.
4. Use the Task tool with `subagent_type: playwright-test-planner` to:
   - Navigate to the application (http://localhost:3001/ or http://localhost:5173/)
   - Analyze the UI based on the spec requirements
   - Create a comprehensive test plan covering all ADDED/MODIFIED requirements
5. Save the generated test plan to `specs/test-plans/<nn>-<capability>.test-plan.md`.
6. Update `tasks.md` to include test implementation tasks referencing the test plan.

**Test Plan Structure**
The test plan should map directly to OpenSpec requirements:
- Each ADDED requirement → New test suite
- Each MODIFIED requirement → Updated test cases
- Each Scenario in the spec → At least one test case

**Reference**
- Use `openspec show <id> --json --deltas-only` to extract requirement details.
- Test files should follow: `e2e/<capability>/<test-name>.spec.ts`
<!-- OPENSPEC:END -->