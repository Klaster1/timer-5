import { spawn, spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const { version } = createRequire(import.meta.url)('@playwright/test/package.json');

export const containerName = 'timer-5-playwright-server';
export const serverPort = 3333;
// The image, the server and the test runner must run the same Playwright version, so all three follow @playwright/test.
const image = `mcr.microsoft.com/playwright:v${version}-noble`;

// Without windowsHide, a docker.exe started from the console-less watcher opens a terminal window on Windows.
const docker = (...args) => spawnSync('docker', args, { encoding: 'utf8', windowsHide: true });

export const removeContainer = () => {
  docker('rm', '--force', containerName);
};

const isContainerRunning = () => docker('ps', '--quiet', '--filter', `name=^${containerName}$`).stdout.trim() !== '';

/** Starts the container and returns when the server accepts connections. */
export const startContainer = async () => {
  removeContainer();
  const run = docker(
    ...['run', '--detach', '--rm', '--init', '--name', containerName, '--workdir', '/home/pwuser', '--user', 'pwuser'],
    ...['--publish', `${serverPort}:${serverPort}`, image],
    ...['npx', '-y', `playwright@${version}`, 'run-server', '--port', String(serverPort), '--host', '0.0.0.0'],
  );
  if (run.status !== 0) throw new Error(`docker run failed: ${run.stderr}`);
  for (let attempt = 0; attempt < 120; attempt++) {
    const logs = docker('logs', containerName);
    if (/Listening on ws/.test(logs.stdout + logs.stderr)) return;
    if (!isContainerRunning())
      throw new Error(`The Playwright server container stopped:\n${logs.stdout}${logs.stderr}`);
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error('The Playwright server did not start in 60 s.');
};

/**
 * Starts a detached process that removes the container when the runner dies, then exits.
 * A killed runner runs no teardown, and a container started with `docker run -d` outlives it.
 */
export const watchRunner = (runnerPid) => {
  spawn(process.execPath, [fileURLToPath(import.meta.url), 'watch', String(runnerPid)], {
    detached: true,
    stdio: 'ignore',
    windowsHide: true,
  }).unref();
};

const watch = (runnerPid) => {
  setInterval(() => {
    try {
      process.kill(runnerPid, 0);
    } catch (error) {
      if (error.code !== 'ESRCH') return;
      removeContainer();
      process.exit(0);
    }
  }, 1000);
};

if (import.meta.url === pathToFileURL(process.argv[1]).href && process.argv[2] === 'watch') {
  watch(Number(process.argv[3]));
}
