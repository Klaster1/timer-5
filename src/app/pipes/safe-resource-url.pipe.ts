import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safeResourceUrl', standalone: true })
export class SafeUrlPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  public transform(url: string | null): SafeResourceUrl | undefined {
    if (!url) return;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
