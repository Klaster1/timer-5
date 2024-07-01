import express from 'express';
import { readdirSync } from 'node:fs';
import { rename, unlink } from 'node:fs/promises';

/**
 * @typedef {'reference'|'current'|'diff'} Type
 */

/**
 * @typedef {'linux' | 'windows' | 'unknown'} Platform
 */

/**
 * @typedef {Object} Result
 * @property {string} fixture
 * @property {string} test
 * @property {string} name
 * @property {string} referenceFile
 * @property {string | null} diffFile
 * @property {string | null} currentFile
 * @property {Platform} platform
 */

express()
  .use(express.json())
  // serve a html file when requesting /
  .get('/', (req, res) => {
    res.sendFile('./scripts/visual-regression-review.html', { root: '.' });
  })
  .get('/files/:platform/:file', async (req, res) => {
    res.sendFile(`./e2e/visual-regression-screenshots/${req.params.platform}/${req.params.file}`, { root: '.' });
  })
  .get('/results', (req, res) => {
    const regex = /\[(?<fixture>.*?)\] (?<test>.*?) - (?<name>.*?).(?<type>reference|current|diff).png/;
    const platforms = readdirSync('./e2e/visual-regression-screenshots');
    /** @type {Result[]} */
    const results = platforms.flatMap((platform) => {
      const files = readdirSync(`./e2e/visual-regression-screenshots/${platform}`);
      return files.flatMap((file, index, all) => {
        const match = file.match(regex);
        const { fixture, test, name, type } = match.groups;
        if (type !== 'reference') return [];
        const referenceFile = file;
        const diffFile = all.find((f) => f.includes(`[${fixture}] ${test} - ${name}.diff.png`)) ?? null;
        const currentFile = all.find((f) => f.includes(`[${fixture}] ${test} - ${name}.current.png`)) ?? null;
        return [{ fixture, test, name, referenceFile, diffFile, currentFile, platform }];
      });
    });

    res.json(results);
  })
  .post('/approvals', async (req, res) => {
    /**
     * @type {Result}
     */
    const approval = req.body;
    await unlink(`./e2e/visual-regression-screenshots/${approval.platform}/${approval.diffFile}`);
    await unlink(`./e2e/visual-regression-screenshots/${approval.platform}/${approval.referenceFile}`);
    await rename(
      `./e2e/visual-regression-screenshots/${approval.platform}/${approval.currentFile}`,
      `./e2e/visual-regression-screenshots/${approval.platform}/${approval.referenceFile}`,
    );
    res.status(201).end();
  })
  .listen(4201);

console.log('Visual regression review running at http://localhost:4201/');
