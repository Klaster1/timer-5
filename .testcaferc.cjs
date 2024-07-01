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
        const client = await t.getCurrentCDPSession();
        client.send('Animation.setPlaybackRate', { playbackRate: 100000 });
        await t.resizeWindow(1920, 1080);
      },
    },
  },
};
