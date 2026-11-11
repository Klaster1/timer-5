# Claude-first instructions, Angular update, WebMCP tools

Branch: `claude-first-webmcp`, from `master` at `5b85cdb`.

## Goal

An AI agent reads and drives the timer through WebMCP tools that the app registers in the
browser. The repo's agent instructions and skills move from GitHub Copilot to Claude Code
first.

## Part 0: Claude-first instructions and skills

- `CLAUDE.md` at the root becomes the instruction file. It takes the one rule from
  `.github/copilot-instructions.md` and adds the project facts an agent needs: the npm
  scripts, how the e2e suite runs (dev server on 4200, Windows snapshots locally, Linux
  snapshots in Docker and CI), and where plans go (`docs/superpowers/plans/`).
- `.github/copilot-instructions.md` goes.
- `.github/skills/test-hardening/` moves to `.claude/skills/test-hardening/` with `git mv`.
  Its text changes only where it names a Copilot-only tool or path.
- `.vscode/mcp.json` and `.vscode/playwright-mcp.config.json` stay as they are: the one
  server in `mcp.json` is commented out.

Done when: `git grep -i copilot` finds nothing, and the skill sits under `.claude/skills/`.

## Part 1: Angular to the latest release

- Today: Angular 22.0.1 (`@angular/core` in `node_modules`). Latest on npm: 22.2.5.
- Run `ng update` for `@angular/core`, `@angular/cli` and `@angular/material` (with
  `@angular/cdk`), and apply the migrations it offers.
- 22.0.1 already has the experimental WebMCP API (`provideExperimentalWebMcpTools`,
  `declareExperimentalWebMcpTool`), and it looks up `document.modelContext` before
  `navigator.modelContext`. Re-check the API names after the update: the API is
  experimental and can change in a minor release.

Done when: `npm run build` passes and the full e2e suite passes locally against `npm start`.

## Part 2: WebMCP tools

Register the tools with `provideExperimentalWebMcpTools` in `src/main.ts`, from one new file,
`src/app/providers/webmcp-tools.ts`. Each `execute` runs in the root injection context, so it
calls `inject(AppStore)` and uses the same store methods the UI uses. Each tool returns a JSON
string. Times go out as ISO 8601 with the local offset, durations as milliseconds.

Read tools:

| Tool | Input | Returns |
| --- | --- | --- |
| `list_tasks` | `state` (`active`, `finished`, `dropped`, `all`; default `active`), `query` (case-insensitive name substring), `runningOnly`, `limit` (default 50, max 500) | Tasks in the app's order: `id`, `name`, `state`, `running`, `totalMs`, `lastSessionStart`; plus the match count |
| `get_task` | `taskId` | The task with its sessions: `index`, `start`, `end` (null while running), `durationMs` |
| `get_time_report` | `from`, `to` (ISO date or date-time; a bare date is local midnight; `to` is exclusive) | Time per task inside the range, sessions clipped to it, a running session counted up to now; sorted by time, plus the total |

Write tools:

| Tool | Input | Store method |
| --- | --- | --- |
| `create_task` | `name`, `start` (default false) | `createTask`, which then returns the new id; `startTask` when `start` is true |
| `start_task` | `taskId` | `startTask(taskId, Date.now())`, as the task screen does |
| `stop_task` | `taskId` | `stopTask(taskId, Date.now())` |
| `rename_task` | `taskId`, `name` | `renameTask` |
| `set_task_state` | `taskId`, `state` | `updateTaskState` |
| `edit_session` | `taskId`, `sessionIndex`, `start`, `end` (optional) | `editSession` |
| `delete_session` | `taskId`, `sessionIndex` | `deleteSession` |
| `delete_task` | `taskId` | `deleteTask`; its description tells the agent to confirm with the user first |

An unknown task id or session index returns an error message naming the id, not an empty
success.

Test: one e2e spec, `e2e/fixtures/webmcp.ts`. An init script installs a stub
`document.modelContext` whose `registerTool` keeps each tool, so the spec runs in Playwright's
Chromium without browser WebMCP support. The spec calls the tools through the stub and checks
the result on screen (a created task shows in the list, a started task shows as running) and
in the returned JSON.

Using the tools from a real browser needs WebMCP turned on in Chrome: the WebMCP entry in
`chrome://flags`, or an origin-trial token for `klaster1.github.io`. `README.md` says so.

Done when: `npm run build` passes, the new spec passes, and the full e2e suite passes once
at the end.
