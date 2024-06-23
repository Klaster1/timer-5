import express from 'express';
import { resolve } from 'node:path';
const angularConfig = (await import(`../angular.json`, { assert: { type: 'json' } })).default;

const dir = angularConfig.projects.timer.architect.build.options.outputPath.base;
const base = angularConfig.projects.timer.architect.build.options.baseHref;

express()
  .use(base, express.static(dir))
  .get('*', (req, res) => {
    res.sendFile(resolve(dir, '404.html'));
  })
  .listen(4200);

console.log(`Server started at http://localhost:4200${base}`);
