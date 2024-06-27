import { createCanvas, loadImage } from '@napi-rs/canvas';
import looksSame from 'looks-same';
import { existsSync } from 'node:fs';
import { mkdir, unlink, writeFile } from 'node:fs/promises';
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

const prepare = async () => {
  await getCdpClient().then((client) => client.send('Animation.setPlaybackRate', { playbackRate: 100000 }));
  await t.eval(() => {
    const style = document.createElement('style');
    style.id = 'visual-regression';
    style.innerHTML = '.root-hammerhead-shadow-ui { display: none !important; }';
    document.head.appendChild(style);
  });

  return async () => {
    await t.eval(() => document.querySelector('#visual-regression')?.remove());
    await getCdpClient().then((client) => client.send('Animation.setPlaybackRate', { playbackRate: 1 }));
  };
};

const captureScreenshot = async (path: string) => {
  const client = await getCdpClient();
  const screenshot = await client.send('Page.captureScreenshot', { format: 'png' });
  await mkdir(dirname(path), { recursive: true });
  return Buffer.from(screenshot.data, 'base64');
};

type Rect = { x: number; y: number; width: number; height: number };

const getSelectorsBounds = async (selectors: Selector[]): Promise<Rect[]> => {
  const result: Rect[] = [];
  for (const selector of selectors) {
    for (let i = 0; i < (await selector.count); i++) {
      const bounds = await selector.nth(i).boundingClientRect;
      result.push({
        x: bounds.left,
        y: bounds.top,
        width: bounds.width,
        height: bounds.height,
      });
    }
  }
  return result;
};

const maskImage = async (source: string | Buffer, bounds: Rect[]) => {
  const image = await loadImage(source);
  const canvas = createCanvas(image.width, image.height);
  canvas.getContext('2d').fillStyle = 'cyan';
  canvas.getContext('2d').drawImage(image, 0, 0);
  for (const bound of bounds) {
    canvas.getContext('2d').fillRect(bound.x, bound.y, bound.width, bound.height);
  }
  return canvas.toBuffer('image/png');
};

export async function comparePageScreenshot(
  name: string,
  options?: {
    ignore?: Selector[];
    looksSame?: Omit<looksSame.LooksSameOptions, 'createDiffImage' | 'stopOnFirstFail'>;
  },
) {
  const paths = getPaths(name);
  const mode: VisualRegressionMode = existsSync(paths.reference) ? 'compare' : 'create';

  const cleanup = await prepare();
  const diffClusters = await getSelectorsBounds(options?.ignore ?? []);
  await Promise.all([unlink(paths.diff), unlink(paths.current)]).catch((e) => {});
  const screenshot = await captureScreenshot(mode === 'compare' ? paths.current : paths.reference);
  await cleanup();

  if (mode === 'create') {
    await writeFile(paths.reference, screenshot);
    return VISUAL_REGRESSION_OK;
  } else if (mode === 'compare') {
    const maskedReference = await maskImage(paths.reference, diffClusters);
    const maskedCurrent = await maskImage(screenshot, diffClusters);
    const { equal, diffImage, ...rest } = await looksSame(maskedReference, maskedCurrent, {
      createDiffImage: true,
      ignoreCaret: true,
      shouldCluster: true,
      ...options?.looksSame,
    });
    if (equal) {
      return VISUAL_REGRESSION_OK;
    } else {
      await diffImage.save(paths.diff);
      await writeFile(paths.current, screenshot);
      return { match: false, ...rest };
    }
  } else {
    return VISUAL_REGRESSION_OK;
  }
}
