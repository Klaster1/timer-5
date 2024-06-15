import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FaviconService {
  private document = inject(DOCUMENT);
  setIcon(href: string) {
    this.document.querySelector('link[rel="icon"]')?.setAttribute('href', href);
  }
}
