import { createCanvas, loadImage } from '@napi-rs/canvas';
import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { fixture, Selector, test } from 'testcafe';
import { app } from '../e2e/page-objects/app';
import { getCdpClient, mockDate } from '../e2e/utils';

const TEST_DATA_URL =
  'https://gist.github.com/Klaster1/a456beaf5384924fa960790160286d8a/raw/83483f6179dfd13a63eca7afb62b5571ba6bf6e9/games.json';

fixture`Promo`.beforeEach(async (t) => {
  await t.eval(() => {
    const style = document.createElement('style');
    style.id = 'visual-regression';
    style.innerHTML = '.root-hammerhead-shadow-ui { display: none !important; }';
    document.head.appendChild(style);
  });
  if (!existsSync('e2e/downloads/screenshot-data.json')) {
    const data = await fetch(TEST_DATA_URL).then((res) => res.text());
    await writeFile('./e2e/downloads/screenshot-data.json', data, { encoding: 'utf-8' });
  }
  await t.click(app.buttonImportExport);
  await t.setFilesToUpload(app.inputImport, ['../e2e/downloads/screenshot-data.json']);
  await mockDate(new Date('2024-07-13T13:41:05'));
  await t.pressKey('g t j s');
  await mockDate(new Date('2024-07-13T15:33:44'));
  await t.pressKey('esc');
});

test('Readme screenshot', async (t) => {
  const client = await getCdpClient();
  const screenshot = async (theme: 'light' | 'dark') => {
    await t.click(app.buttonSwitchTheme);
    await t.click(app.buttonTheme.withText(theme === 'dark' ? 'Dark' : 'Light'));
    await t.click(Selector('body'), { offsetX: 0, offsetY: 0 });
    await t.click(Selector('body'), { offsetX: 0, offsetY: 0 });

    const scaling = 0.5;
    await t.resizeWindow(2152 * scaling, 1278 * scaling);
    const screenshot = await client.send('Page.captureScreenshot', {
      format: 'png',
    });
    return Buffer.from(screenshot.data, 'base64');
  };
  const dark = await loadImage(await screenshot('dark'));
  const light = await loadImage(await screenshot('light'));
  const canvas = createCanvas(dark.width, dark.height);
  const ctx = canvas.getContext('2d');

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

  const buffer = canvas.toBuffer('image/png');
  await writeFile(`./screenshot.png`, buffer);
});

test('Open graph', async (t) => {
  const padding = 40;
  const width = 640;
  const height = 320;
  const scale = 2;
  const background = '#343434';

  await t.resizeWindow(width * scale - padding * 2 * scale, height * scale - padding * 2 * scale);
  await t.click(Selector('body'), { offsetX: 0, offsetY: 0 });
  await t.click(Selector('body'), { offsetX: 0, offsetY: 0 });
  const client = await getCdpClient();
  const screenshot = await client.send('Page.captureScreenshot', {
    format: 'png',
  });

  const canvas = createCanvas(width * scale, height * scale);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    await loadImage(Buffer.from(screenshot.data, 'base64')),
    padding * scale,
    padding * scale,
    canvas.width - padding * 2 * scale,
    canvas.height - padding * 2 * scale,
  );

  const buffer = canvas.toBuffer('image/png');
  await writeFile(`./social.png`, buffer);
});
