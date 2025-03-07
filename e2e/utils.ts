import { ClientFunction, Selector, t } from 'testcafe';

export const e2e = (id: string) => Selector(`[data-e2e="${id}"]`);
export const getLocationPathname = ClientFunction(() => window.location.pathname);
export const getLocationSearch = ClientFunction(() => window.location.search);
export const reload = async () => t.getCurrentCDPSession().then((client) => client.Page.reload({ ignoreCache: true }));

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
