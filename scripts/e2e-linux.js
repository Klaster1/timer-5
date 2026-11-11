import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

// Sets the switch for playwright.config.ts in a way that works on every OS, then runs Playwright with the other arguments.
const cli = createRequire(import.meta.url).resolve('@playwright/test/cli');
const runner = spawn(process.execPath, [cli, 'test', 'e2e/fixtures', ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: { ...process.env, E2E_LINUX: '1' },
});
// Ctrl+C reaches the runner too. Wait for it, so its teardown finishes.
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => {});
runner.on('exit', (code) => process.exit(code ?? 1));
