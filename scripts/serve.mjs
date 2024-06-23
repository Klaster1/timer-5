import express from 'express';
import fallback from 'express-history-api-fallback';

const angularConfig = (await import(`../angular.json`, { assert: { type: 'json' } })).default;
const dir = angularConfig.projects.timer.architect.build.options.outputPath.base;
const base = angularConfig.projects.timer.architect.build.options.baseHref;

express()
  .use(base, express.static(dir))
  .use(base, fallback('index.html', { root: dir }))
  .listen(4200);

console.log(`Server started at http://localhost:4200${base}`);
