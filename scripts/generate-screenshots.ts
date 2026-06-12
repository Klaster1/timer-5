import type { Page } from '@playwright/test';
import { chromium } from '@playwright/test';
import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';

const TEST_DATA_URL =
  'https://gist.github.com/Klaster1/a456beaf5384924fa960790160286d8a/raw/83483f6179dfd13a63eca7afb62b5571ba6bf6e9/games.json';
const SCREENSHOT_DATA_FILE = 'e2e/downloads/screenshot-data.json';
const BASE_URL = process.env['SCREENSHOT_BASE_URL'] ?? 'http://localhost:4200/';

const installScreenshotStabilizers = async (page: Page): Promise<void> => {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        caret-color: transparent !important;
      }
      .cdk-overlay-backdrop {
        transition: none !important;
      }
    `,
  });
};

const parkCursor = async (page: Page): Promise<void> => {
  await page.mouse.move(-1, -1);
  await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
};

const waitForStableFrame = async (page: Page): Promise<void> => {
  await page.waitForTimeout(120);
  await page.evaluate(
    () =>
      new Promise((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(resolve));
      }),
  );
};

const closeOverlays = async (page: Page): Promise<void> => {
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('.cdk-overlay-backdrop-showing'));
  await waitForStableFrame(page);
};

const pressCombo = async (page: Page, combo: string): Promise<void> => {
  for (const key of combo.split(' ')) {
    const mapped = key.toLowerCase() === 'esc' ? 'Escape' : key;
    await page.keyboard.press(mapped);
    await page.waitForTimeout(50);
  }
};

const mockDate = async (page: Page, dateString: string): Promise<void> => {
  const timestamp = new Date(dateString).valueOf();
  await page.evaluate((ts: number) => {
    Date.now = () => ts;
  }, timestamp);
};

const ensureTestData = async (): Promise<void> => {
  if (existsSync(SCREENSHOT_DATA_FILE)) return;
  const data = await fetch(TEST_DATA_URL).then((res) => res.text());
  await writeFile(SCREENSHOT_DATA_FILE, data, { encoding: 'utf-8' });
};

const importDataAndPrepare = async (page: Page): Promise<void> => {
  await page.goto('/');
  await installScreenshotStabilizers(page);
  await page.locator('[data-e2e="navigation__button-import-export"]').click();
  await page.locator('[data-e2e="navigation__input-import"]').setInputFiles(SCREENSHOT_DATA_FILE);

  await mockDate(page, '2024-07-13T13:41:05');
  await pressCombo(page, 'g t j s');
  await mockDate(page, '2024-07-13T15:33:44');
  await pressCombo(page, 'esc');
};

const createReadmeScreenshot = async (page: Page): Promise<void> => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await waitForStableFrame(page);

  const screenshot = async (theme: 'dark' | 'light'): Promise<Buffer> => {
    await page.evaluate(() => {
      const button = document.querySelector('[data-e2e="navigation__button-theme"]');
      button?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    });
    await page.getByRole('menuitem', { name: theme === 'dark' ? 'Dark' : 'Light' }).click();
    await closeOverlays(page);

    const scaling = 0.5;
    await page.setViewportSize({
      width: Math.round(2152 * scaling),
      height: Math.round(1278 * scaling),
    });
    await waitForStableFrame(page);
    await parkCursor(page);
    return page.screenshot({ type: 'png' });
  };

  const darkBuf = await screenshot('dark');
  const lightBuf = await screenshot('light');

  const resultBase64 = await page.evaluate(
    async ({ darkBase64, lightBase64 }) => {
      const loadImg = (src: string): Promise<HTMLImageElement> =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.src = src;
        });

      const [dark, light] = await Promise.all([
        loadImg(`data:image/png;base64,${darkBase64}`),
        loadImg(`data:image/png;base64,${lightBase64}`),
      ]);

      const canvas = document.createElement('canvas');
      canvas.width = dark.width;
      canvas.height = dark.height;
      const ctx = canvas.getContext('2d')!;

      ctx.drawImage(dark, 0, 0);

      const angle = -66 * (Math.PI / 180);
      const lineLength = canvas.height / Math.sin(angle);
      const startX = canvas.width / 1.9 - (lineLength * Math.cos(angle)) / 2;
      const startY = 0;
      const endX = startX + lineLength * Math.cos(angle);
      const endY = startY + lineLength * Math.sin(angle);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(canvas.width, 0);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(light, 0, 0);
      ctx.restore();

      return canvas.toDataURL('image/png').split(',')[1];
    },
    {
      darkBase64: darkBuf.toString('base64'),
      lightBase64: lightBuf.toString('base64'),
    },
  );

  await writeFile('./screenshot.png', Buffer.from(resultBase64!, 'base64'));
};

const createSocialScreenshot = async (page: Page): Promise<void> => {
  const padding = 40;
  const width = 640;
  const height = 320;
  const scale = 2;
  const background = '#343434';

  await page.setViewportSize({
    width: width * scale - padding * 2 * scale,
    height: height * scale - padding * 2 * scale,
  });
  await closeOverlays(page);
  await waitForStableFrame(page);
  await parkCursor(page);

  const screenshotBuf = await page.screenshot({ type: 'png' });

  const resultBase64 = await page.evaluate(
    async ({ imgBase64, w, h, s, p, bg }) => {
      const img = await new Promise<HTMLImageElement>((resolve) => {
        const el = new Image();
        el.onload = () => resolve(el);
        el.src = `data:image/png;base64,${imgBase64}`;
      });

      const canvas = document.createElement('canvas');
      canvas.width = w * s;
      canvas.height = h * s;
      const ctx = canvas.getContext('2d')!;

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, p * s, p * s, canvas.width - p * 2 * s, canvas.height - p * 2 * s);

      return canvas.toDataURL('image/png').split(',')[1];
    },
    { imgBase64: screenshotBuf.toString('base64'), w: width, h: height, s: scale, p: padding, bg: background },
  );

  await writeFile('./social.png', Buffer.from(resultBase64!, 'base64'));
};

const main = async (): Promise<void> => {
  await ensureTestData();

  const browser = await chromium.launch({
    headless: true,
    args: ['--force-device-scale-factor=2'],
  });

  const context = await browser.newContext({
    baseURL: BASE_URL,
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();

  try {
    await importDataAndPrepare(page);
    await createReadmeScreenshot(page);
    await createSocialScreenshot(page);
  } finally {
    await context.close();
    await browser.close();
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
