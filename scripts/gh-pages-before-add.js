import { copyFile, writeFile } from 'node:fs/promises';

await copyFile('dist/timer-5/index.html', 'dist/timer-5/404.html');
console.log('404 created');

const ngswConfig = (await import('../dist/timer-5/ngsw.json', { assert: { type: 'json' } })).default;
const indexHtmlAt = ngswConfig.assetGroups.at(0).urls.indexOf(`/timer-5/index.html`);
ngswConfig.assetGroups.at(0).urls.splice(indexHtmlAt, 0, '/timer-5/404.html');
const indexHtmlHash = ngswConfig.hashTable['/timer-5/index.html'];
ngswConfig.hashTable['/timer-5/404.html'] = indexHtmlHash;
await writeFile('dist/timer-5/ngsw.json', JSON.stringify(ngswConfig, null, '  '));
console.log('ngsw.json updated');
