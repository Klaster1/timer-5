const waitOn = require('wait-on');
const baseUrl = 'http://localhost:4200/timer-5/';

/** @type {TestCafeConfigurationOptions} */
module.exports = {
  src: './e2e/fixtures/',
  baseUrl,
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
      before: async () => {
        try {
          await waitOn({
            resources: [baseUrl],
            timeout: 35_000,
            interval: 500,
          });
        } catch (error) {
          console.error('Error waiting for the server:', error);
          process.exit(1);
        }
      },
    },
  },
};
