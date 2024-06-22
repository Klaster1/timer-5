const { copyFileSync, writeFileSync } = require('node:fs');

const beforeAdd = () => {
  copyFileSync('./dist/index.html', './dist/404.html');
  console.log('404 created');

  const ngswConfig = require('./dist/ngsw.json');
  const indexHtmlAt = ngswConfig.assetGroups.at(0).urls.indexOf(`/timer-5/index.html`);
  ngswConfig.assetGroups.at(0).urls.splice(indexHtmlAt, 0, '/timer-5/404.html');
  const indexHtmlHash = ngswConfig.hashTable['/timer-5/index.html'];
  ngswConfig.hashTable['/timer-5/404.html'] = indexHtmlHash;
  writeFileSync('./dist/ngsw.json', JSON.stringify(ngswConfig, null, '  '));
  console.log('ngsw.json updated');
};

module.exports = beforeAdd;
