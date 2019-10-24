import { Pipe, NgModule } from '@angular/core';

@Pipe({ name: 'toString' })
export class ToStringPipe {
  transform(value: unknown) {
    if (typeof value !== 'number') return ''
    if (typeof value === 'string') return value
    else return value.toString(10);
  }
}

@NgModule({ declarations: [ToStringPipe], exports: [ToStringPipe] })
export class ToStringPipeModule { }
