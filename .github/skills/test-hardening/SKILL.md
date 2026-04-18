---
name: test-hardening
description: Use when Playwright end-to-end tests are flaky, timing-sensitive, or need stress validation under CPU and parallel load before merge.
argument-hint: Test scope to harden (single test, fixture, or full suite)
---

# Test Hardening (Strict Flow)

## Outcome

Produce reliable Playwright tests under stress without weakening correctness.

## When to Use

- Intermittent pass/fail behavior across repeated runs.
- Screenshot tests that fail only under load.
- Timeouts that appear after increasing workers or CPU pressure.
- Migration phases where old assumptions no longer hold.

## Hard Rules

1. Do not change assertions just to make a failing run pass.
2. Do not loosen screenshot tolerances unless a rendering-only root cause is proven.
3. Do not keep stress instrumentation in baseline test config.
4. Any temporary hardening harness must be reverted before completion.
5. A fix is valid only when behavior is still checked at the same product-level intent.

## Required Inputs

- Target scope: one test, one fixture, or full suite.
- Stress profile: CPU throttle x6, repeat each 100, workers 12.
- Execution targets: host and container when both are used by the project.

## Strict Procedure

1. Define scope and create one tracking item per test case.
2. Enable stress profile with temporary instrumentation only.
3. Run the specified scope under instrumentation to establish the pre-fix baseline.
4. Run one test case at a time under the same instrumentation until completion.
5. If the case fails, classify failure before changing code.
6. Fix root cause, rerun the same case under the same instrumentation to 100/100, then mark tracking item complete.
7. Continue until every case in scope is complete.
8. Remove temporary instrumentation and restore baseline config.
9. Run baseline suite in normal mode only after rollback to ensure no stress-only changes leaked.
10. Report outcomes with exact pass counts and remaining risks.

## Failure Classification

- Visual mismatch:
  - Confirm deterministic UI readiness first (dialog visible, fonts ready, stable hover/focus state).
  - Keep strict snapshots unless root cause proves non-product rendering noise.
- Timeout:
  - Identify whether timeout is actionability, navigation, assertion wait, or test budget.
  - Fix the blocking condition (state readiness, selector stability, state transition), not by masking checks.
- Timing assertion drift:
  - Preserve intent. If requirement is exact text, keep exact text.
  - If product requirement is threshold behavior, encode threshold behavior explicitly and document rationale.
- Data persistence race:
  - Assert intermediate committed state before reload or route changes.

## Decision Gates

1. Did the fix preserve original user-facing behavior checks?
   - If no, reject and redesign.
2. Did the updated test pass 100/100 under stress for that exact case?
   - If no, continue hardening the same case.
3. After instrumentation removal, does baseline pass?
   - If no, revert stress-specific changes and rework.

## Completion Checklist

- All scoped tests have individual tracking items marked complete.
- Each test reached 100/100 under the stress profile.
- Baseline run passes after instrumentation removal.
- No temporary stress fixture or config remains in committed diff.
- Assertions still represent product behavior, not machine timing artifacts.

## Reporting Template

- Scope:
- Stress profile used:
- Per-test result:
- Root causes found:
- Durable fixes applied:
- Temporary changes removed:
- Baseline verification result:
- Residual risks:

## Example Prompts

- Harden the tasks fixture using this strict flow and one tracker item per test.
- Run strict hardening for this single flaky screenshot test and report root cause.
- Apply this flow to the full e2e suite and summarize failures by class.
