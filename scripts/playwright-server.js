import { spawn, spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';

const { version } = createRequire(import.meta.url)('@playwright/test/package.json');

export const containerName = 'timer-5-playwright-server';
export const serverPort = 3333;
// The image, the server and the test runner must run the same Playwright version, so all three follow @playwright/test.
const image = `mcr.microsoft.com/playwright:v${version}-noble`;

export const removeContainer = () => {
  spawnSync('docker', ['rm', '--force', containerName], { stdio: 'ignore' });
};

// The global teardown of the Linux e2e run.
export default removeContainer;

const runServer = () => {
  removeContainer();
  const container = spawn(
    'docker',
    [
      ...['run', '--rm', '--init', '--name', containerName, '--workdir', '/home/pwuser', '--user', 'pwuser'],
      ...['--publish', `${serverPort}:${serverPort}`, image],
      ...['npx', '-y', `playwright@${version}`, 'run-server', '--port', String(serverPort), '--host', '0.0.0.0'],
    ],
    { stdio: 'inherit' },
  );
  container.on('exit', (code) => process.exit(code ?? 1));
  process.on('exit', removeContainer);
  for (const signal of ['SIGINT', 'SIGTERM', 'SIGHUP', 'SIGBREAK']) process.on(signal, () => process.exit(1));

  // Windows ends this process without a signal when the runner stops, and a killed `docker run` leaves its container
  // running. Polling the runner lets this process notice that and remove the container.
  const runnerPid = Number(process.env['E2E_RUNNER_PID']);
  if (runnerPid) {
    setInterval(() => {
      try {
        process.kill(runnerPid, 0);
      } catch (error) {
        if (error.code === 'ESRCH') process.exit(1);
      }
    }, 1000);
  }
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) runServer();
