const { beforeEach } = require('node:test');

/** @type {TestCafeConfigurationOptions} */
module.exports = {
  src: './e2e/fixtures/',
  baseUrl: 'http://localhost:4200/',
  screenshots: {
    path: './e2e/screenshots',
    takeOnFails: true,
  },
  compilerOptions: {
    typescript: {
      options: {
        esModuleInterop: true,
      },
    },
  },
  hooks: {
    test: {
      before: async (t) => {
        await t.resizeWindow(1920, 1080);
      },
    },
  },
};
