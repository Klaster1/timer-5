import type remoteChrome from 'chrome-remote-interface';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { ClientFunction, Selector, t } from 'testcafe';

export const e2e = (id: string) => Selector(`[data-e2e="${id}"]`);
export const getLocationPathname = ClientFunction(() => window.location.pathname);
export const getLocationSearch = ClientFunction(() => window.location.search);
export const getCdpClient = () => t.getCurrentCDPSession().then((client) => client as remoteChrome.Client);
export const reload = async () => getCdpClient().then((client) => client.send('Page.reload', { ignoreCache: true }));
export const setDownloadsDirectory = async (path: string) => {
  const client = await getCdpClient();
  const downloadPath = resolve(__dirname, 'downloads', path);
  mkdir(downloadPath, { recursive: true });
  await client.send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath });
  return downloadPath;
};
