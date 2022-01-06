import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'map',
})
export class MapPipe implements PipeTransform {
  transform<Value, Args, Result>(value: Value, fn: (value: Value, ...rest: Args[]) => Result, ...rest: Args[]): Result {
    return fn(value, ...rest);
  }
}

@NgModule({
  declarations: [MapPipe],
  exports: [MapPipe],
})
export class MapPipeModule {}
