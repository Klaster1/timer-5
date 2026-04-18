import type { Page } from '@playwright/test';

const KEY_ALIAS: Record<string, string> = {
  esc: 'Escape',
  enter: 'Enter',
  tab: 'Tab',
  delete: 'Delete',
  ф: 'a',
  е: 't',
  ы: 's',
  ь: 'm',
  а: 'f',
  к: 'r',
  в: 'd',
};

const toPlaywrightKey = (key: string): string => {
  const lower = key.toLowerCase();
  if (lower in KEY_ALIAS) return KEY_ALIAS[lower];
  if (lower.startsWith('ctrl+')) {
    const suffix = key.slice('ctrl+'.length);
    const mappedSuffix = toPlaywrightKey(suffix);
    return `Control+${mappedSuffix}`;
  }
  return key;
};

export const pressCombo = async (page: Page, combo: string): Promise<void> => {
  for (const key of combo.split(' ')) {
    await page.keyboard.press(toPlaywrightKey(key));
    await page.waitForTimeout(80);
  }
};

export const getLocationPathname = async (page: Page): Promise<string> => page.evaluate(() => window.location.pathname);

export const getLocationSearch = async (page: Page): Promise<string> => page.evaluate(() => window.location.search);

export const closeOverlays = async (page: Page): Promise<void> => {
  await page.locator('body').click({ position: { x: 0, y: 0 } });
};

export const forceSystemTheme = async (page: Page, scheme: 'dark' | 'light'): Promise<void> => {
  await page.emulateMedia({ colorScheme: scheme });
};

export const reloadIgnoringCache = async (page: Page): Promise<void> => {
  const cdpSession = await page.context().newCDPSession(page);
  await cdpSession.send('Page.reload', { ignoreCache: true });
};

export const setDeviceMetrics = async (
  page: Page,
  options: {
    width: number;
    height: number;
    mobile: boolean;
    deviceScaleFactor: number;
    screenOrientation: { angle: number; type: 'portraitPrimary' | 'landscapePrimary' };
  },
): Promise<void> => {
  const cdpSession = await page.context().newCDPSession(page);
  await cdpSession.send('Emulation.setDeviceMetricsOverride', options);
};

export const clearDeviceMetrics = async (page: Page): Promise<void> => {
  const cdpSession = await page.context().newCDPSession(page);
  await cdpSession.send('Emulation.clearDeviceMetricsOverride');
};

export const setCPUThrottlingRate = async (page: Page, rate: number): Promise<void> => {
  const cdpSession = await page.context().newCDPSession(page);
  await cdpSession.send('Emulation.setCPUThrottlingRate', { rate });
};

export const dispatchF2 = async (page: Page): Promise<void> => {
  const cdpSession = await page.context().newCDPSession(page);
  await cdpSession.send('Input.dispatchKeyEvent', {
    type: 'keyDown',
    key: 'F2',
    windowsVirtualKeyCode: 113,
  });
};

export const mockDate = async (page: Page, date: Date): Promise<void> => {
  const timestamp = date.valueOf();
  await page.evaluate((ts) => {
    Date.now = () => ts;
  }, timestamp);
};

export const advanceDate = async (page: Page, ms: number): Promise<void> => {
  await page.evaluate((delta) => {
    const oldNow = Date.now();
    Date.now = () => oldNow + delta;
  }, ms);
};

export const restoreDate = async (page: Page): Promise<void> => {
  await page.evaluate(() => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    const originalDateNow = (iframe.contentWindow as unknown as typeof globalThis).Date.now;
    document.body.removeChild(iframe);
    Date.now = originalDateNow;
  });
};
