import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
    transform(value: number) {
        return this.format(value)
    }
    format(value: number) {
        if (value <= 0) return

        return ['h','m']
        .map((part) => {
            switch (part) {
                case 'h':
                    return ~~(value / 3600000)
                case 'm':
                    return ~~((value % 3600000) / 60000)
            }
        })
        .map(this._pad)
        .join(':')
    }
    _pad(value: number) {
        return (value || 0).toString().length === 1 ? '0' + value : value
    }
}

@NgModule({declarations: [DurationPipe], exports: [DurationPipe]})
export class DurationPipeModule {}