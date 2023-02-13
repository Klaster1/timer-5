import { ClientFunction, Selector } from 'testcafe';

export const e2e = (id: string) => Selector(`[data-e2e="${id}"]`);
export const reload = ClientFunction(() => window.location.reload());
export const urlTo = (targetUrl: string): string => {
  // Copied from https://nodejs.org/api/url.html#urlresolvefrom-to
  const resolvedUrl = new URL(targetUrl, new URL('http://localhost:4200', 'resolve://'));
  if (resolvedUrl.protocol === 'resolve:') {
    // `from` is a relative URL.
    const { pathname, search, hash } = resolvedUrl;
    return pathname + search + hash;
  }
  return resolvedUrl.toString();
};
export const getLocationPathname = ClientFunction(() => window.location.pathname);
export const getLocationSearch = ClientFunction(() => window.location.search);
