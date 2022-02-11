import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FaviconService {
  constructor(@Inject(DOCUMENT) private document: Document) {}
  setIcon(href: string) {
    this.document.querySelector('link[rel="icon"]')?.setAttribute('href', href);
  }
}
