import { DOCUMENT, Service, inject } from '@angular/core';

@Service()
export class FaviconService {
  private document = inject(DOCUMENT);
  setIcon(href: string) {
    this.document.querySelector('link[rel="icon"]')?.setAttribute('href', href);
  }
}
