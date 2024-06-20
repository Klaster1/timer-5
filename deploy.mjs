import { copyFile, writeFile } from 'fs/promises';
import ghPages from 'gh-pages';
import 'zx/globals';

$.verbose = true;
process.env.FORCE_COLOR = '1';
const baseHref = '/timer-5/';

await $`npx ng build --configuration production --base-href=${baseHref}`;

await copyFile('./dist/index.html', './dist/404.html');
console.log('404 created');

const ngswConfig = { ...(await import('./dist/ngsw.json', { assert: { type: 'json' } })).default };

const indexHtmlAt = ngswConfig.assetGroups.at(0).urls.indexOf(`/timer-5/index.html`);
ngswConfig.assetGroups.at(0).urls.splice(indexHtmlAt, 0, '/timer-5/404.html');
const indexHtmlHash = ngswConfig.hashTable['/timer-5/index.html'];
ngswConfig.hashTable['/timer-5/404.html'] = indexHtmlHash;
await writeFile('./dist/ngsw.json', JSON.stringify(ngswConfig, null, '  '));
console.log('ngsw.json updated');

await ghPages.publish('./dist', {
  nojekyll: true,
  message: 'Auto-generated commit',
  push: true,
});
console.log('Deployed to GitHub Pages');
