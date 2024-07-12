import type remoteChrome from 'chrome-remote-interface';
import { ClientFunction, Selector, t } from 'testcafe';

export const e2e = (id: string) => Selector(`[data-e2e="${id}"]`);
export const getLocationPathname = ClientFunction(() => window.location.pathname);
export const getLocationSearch = ClientFunction(() => window.location.search);
export const getCdpClient = () => t.getCurrentCDPSession().then((client) => client as remoteChrome.Client);
export const reload = async () => getCdpClient().then((client) => client.send('Page.reload', { ignoreCache: true }));

// Date mocks

export const mockDate = (date: Date) =>
  t.eval(
    () => {
      Date.now = () => date.valueOf();
    },
    {
      dependencies: { date },
    },
  );

export const advanceDate = (ms: number) =>
  t.eval(
    () => {
      const oldNow = Date.now();
      Date.now = () => oldNow + ms;
    },
    { dependencies: { ms } },
  );

export const restoreDate = () =>
  t.eval(() => {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    const originalDateNow = (iframe.contentWindow as unknown as typeof globalThis).Date.now;
    document.body.removeChild(iframe);
    Date.now = originalDateNow;
  });

export const repeatTest = (times, options?: { rename?: boolean }) => {
  const testDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'test');
  const tests: TestFn[] = [];
  Object.defineProperty(globalThis, 'test', {
    get() {
      Object.defineProperty(globalThis, 'test', testDescriptor);

      const makeTest = testDescriptor.get as any;
      const testInstance = makeTest();
      function proxyInstance(name: string, fn: any) {
        for (let i = 1; i <= times; i++) {
          const instance = makeTest();
          const testName = options?.rename ?? true ? `${name} ${i}` : name;
          tests.push(instance.only(testName, fn));
        }
        testInstance(name, fn);
        return proxyInstance;
      }
      const skip = new Set(['prototype', 'length', 'name']);
      for (const [property, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(testInstance))) {
        if (skip.has(property)) continue;
        if (descriptor.get === undefined) {
          Object.defineProperty(proxyInstance, property, {
            get() {
              return testInstance[property];
            },
          });
        } else {
          Object.defineProperty(proxyInstance, property, {
            get: () => {
              const method = descriptor.get();
              if (method.name !== 'apiOrigin') {
                return (...args) => {
                  method(...args);
                  for (const test of tests) {
                    test[property](...args);
                  }
                  return proxyInstance;
                };
              } else {
                for (const test of tests) {
                  test[property];
                }
                return proxyInstance;
              }
            },
          });
        }
      }
      return proxyInstance;
    },
  });
};
