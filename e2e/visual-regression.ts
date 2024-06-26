import looksSame from 'looks-same';
import { existsSync, rmSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { t } from 'testcafe';
import { getCdpClient } from './utils';

export const VISUAL_REGRESSION_OK = { match: true } as const;

type VisualRegressionMode = 'create' | 'compare';
type ScreenshotPathName = 'reference' | 'current' | 'diff';
type ScreenshotPaths = Record<ScreenshotPathName, string>;

const getPaths = (name: string): ScreenshotPaths => {
  const BASE_PATH = ['visual-regression-screenshots'];
  const commonFileName = `[${t.fixture.name}] ${t.test.name} - ${name}`;

  return {
    reference: resolve(__dirname, join(...BASE_PATH, `${commonFileName}.reference.png`)),
    current: resolve(__dirname, join(...BASE_PATH, `${commonFileName}.current.png`)),
    diff: resolve(__dirname, join(...BASE_PATH, `${commonFileName}.diff.png`)),
  };
};

const captureScreenshot = async (path: string, options?: { resolution: { width: number; height: number } }) => {
  await t.eval(() => {
    const style = document.createElement('style');
    style.id = 'visual-regression';
    style.innerHTML = '.root-hammerhead-shadow-ui { display: none !important; }';
    document.head.appendChild(style);
  });
  const windowWidth = await t.eval(() => window.innerWidth);
  const windowHeight = await t.eval(() => window.innerHeight);
  await t.resizeWindow(options?.resolution?.width ?? 1920, options?.resolution.height ?? 1080);
  const client = await getCdpClient();
  const screenshot = await client.send('Page.captureScreenshot', { format: 'png' });
  await t.resizeWindow(windowWidth, windowHeight);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, Buffer.from(screenshot.data, 'base64'));
  await t.eval(() => document.querySelector('#visual-regression')?.remove());
};

export async function comparePageScreenshot(
  name: string,
  options?: {
    looksSame: Omit<looksSame.LooksSameOptions, 'createDiffImage' | 'stopOnFirstFail'>;
  },
) {
  const paths = getPaths(name);
  const mode: VisualRegressionMode = existsSync(paths.reference) ? 'compare' : 'create';

  if (mode === 'create') {
    await captureScreenshot(paths.reference);
  } else if (mode === 'compare') {
    rmSync(paths.diff, { force: true });
    await captureScreenshot(paths.current);
  }
  if (mode === 'create') {
    return VISUAL_REGRESSION_OK;
  } else if (mode === 'compare') {
    const { equal, diffImage, ...rest } = await looksSame(paths.reference, paths.current, {
      createDiffImage: true,
      ...options?.looksSame,
    });
    if (equal) {
      return VISUAL_REGRESSION_OK;
    } else {
      await diffImage.save(paths.diff);
      return { match: false, ...rest };
    }
  } else {
    return VISUAL_REGRESSION_OK;
  }
}
