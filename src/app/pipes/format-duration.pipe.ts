import { Pipe, PipeTransform, NgModule } from '@angular/core';
const pad = (value: number) => (value || 0).toString().length === 1 ? '0' + value : value

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {
    transform(value: number) {
        if (value <= 0) return ''

        return ['h','m'].map((part) => {
            switch (part) {
                case 'h':
                    return pad(~~(value / 3600000))
                case 'm':
                    return pad(~~((value % 3600000) / 60000))
            }
        }).join(':')
    }
}

@NgModule({declarations: [FormatDurationPipe], exports: [FormatDurationPipe]})
export class FormatDurationPipeModule {}