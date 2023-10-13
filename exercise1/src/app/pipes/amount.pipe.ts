import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(value === 1){
      return `there is ${value} item left.`
    } else {
      return `there are ${value} items left.`
    }
  }

}
