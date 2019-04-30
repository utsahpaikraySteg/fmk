import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {

  // transform(value: number, exponent: string): number {
  //   console.log(value);
  //   console.log(exponent);
  //   let exp = parseFloat(exponent);
  //   return Math.pow(value, isNaN(exp) ? 1 : exp);
  // }
  transform(value: string): string {
    console.log(typeof value);
    let exp = value.replace(/\s/g,'');
    return exp;
  }

}
