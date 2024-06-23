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
};
