import { Pipe, PipeTransform } from '@angular/core';
import { formatHours } from '@app/domain/date-time';
import { isNumber } from '@app/utils/assert';
import { Observable, distinctUntilChanged, map } from 'rxjs';

@Pipe({
  name: 'formatDuration',
  standalone: true,
})
export class FormatDurationPipe implements PipeTransform {
  transform(value: number): string;
  transform(value: Observable<number>): Observable<string>;
  transform(value: number | Observable<number>) {
    return isNumber(value)
      ? formatHours(value)
      : value.pipe(
          map((v) => formatHours(v)),
          distinctUntilChanged(),
        );
  }
}
