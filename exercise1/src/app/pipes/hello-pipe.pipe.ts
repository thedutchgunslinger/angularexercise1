import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hello'
})
export class HelloPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `Hello ${value}! Good to see you!`;
  }

}
