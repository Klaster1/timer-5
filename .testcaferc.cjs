const waitOn = require('wait-on');

module.exports = {
  src: './e2e/fixtures/',
  compilerOptions: {
    typescript: {
      options: {
        esModuleInterop: true,
      },
    },
  },
  hooks: {
    testRun: {
      before: async () => {
        await waitOn({
          resources: ['http://localhost:4200'],
          timeout: 30_000,
          interval: 500,
        });
      },
    },
  },
};
