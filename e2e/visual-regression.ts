import { existsSync, rmSync } from 'node:fs';
import path from 'node:path';
import { ODiffOptions, compare as odiff } from 'odiff-bin';
import slugify from 'slugify';
import { t } from 'testcafe';

type VisualRegressionMode = 'create' | 'compare';

export const VISUAL_REGRESSION_OK = { match: true } as const;
export const VISUAL_REGRESSION_META = { 'visual-regression': 'true' };

type ScreenshotPathName = 'reference' | 'current' | 'diff';
type ScreenshotPaths = Record<ScreenshotPathName, string>;

const s = (value: string) => slugify(value).replace(/["':`]/g, '');

const getPaths = (name: string): { relative: ScreenshotPaths; absolute: ScreenshotPaths } => {
  const BASE_PATH = ['screenshots', 'visual-regression'];

  const commonFileName = `${s(t.fixture.name)}__${s(t.test.name)}__${s(name)}`;

  const reference = path.join(...BASE_PATH, `${commonFileName}.reference.png`);
  const current = path.join(...BASE_PATH, `${commonFileName}.current.png`);
  const diff = path.join(...BASE_PATH, `${commonFileName}.diff.png`);

  return {
    relative: { reference, current, diff },
    absolute: {
      reference: path.resolve(__dirname, reference),
      current: path.resolve(__dirname, current),
      diff: path.resolve(__dirname, diff),
    },
  };
};

export async function comparePageScreenshot(
  name: string,
  options?: {
    odiff?: ODiffOptions;
  },
): ReturnType<typeof odiff> {
  const paths = getPaths(name);
  const mode: VisualRegressionMode = existsSync(paths.absolute.reference) ? 'compare' : 'create';

  if (mode === 'create') {
    await t.takeScreenshot({ path: path.relative('screenshots', paths.relative.reference), fullPage: true });
  } else if (mode === 'compare') {
    rmSync(paths.absolute.diff, { force: true });
    await t.takeScreenshot({ path: path.relative('screenshots', paths.relative.current), fullPage: true });
  }
  if (mode === 'create') {
    return VISUAL_REGRESSION_OK;
  } else if (mode === 'compare') {
    return await odiff(paths.absolute.reference, paths.absolute.current, paths.absolute.diff);
  } else {
    return VISUAL_REGRESSION_OK;
  }
}
