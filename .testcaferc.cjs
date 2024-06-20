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
    test: {
      before: async () => {
        try {
          await waitOn({
            resources: ['http://localhost:4200/'],
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
