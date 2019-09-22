import { Pipe, PipeTransform, NgModule } from '@angular/core';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';
const pad = (value: number) => (value || 0).toString().length === 1 ? '0' + value : value;

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {
    transform(value: number): string;
    transform(value: Observable<number>): Observable<string>;
    transform(value: number | Observable<number>) {
        return typeof value === 'number'
            ? this.format(value)
            : value.pipe(map(v => this.format(v)), distinctUntilChanged());
    }
    format(value: number) {
        if (value <= 0) { return ''; }

        return ['h', 'm'].map((part) => {
            switch (part) {
                case 'h':
                    return pad(~~(value / 3600000));
                case 'm':
                    return pad(~~((value % 3600000) / 60000));
            }
        }).join(':');
}
}

@NgModule({declarations: [FormatDurationPipe], exports: [FormatDurationPipe]})
export class FormatDurationPipeModule {}
