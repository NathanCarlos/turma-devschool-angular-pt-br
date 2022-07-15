import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    const vsd = value.split('');

    const phone = `(${vsd[0]}${vsd[1]}) ${vsd[2]}${vsd[3]}${vsd[4]}${vsd[5]}${vsd[6]}-${vsd[7]}${vsd[8]}${vsd[9]}${vsd[10]}`
    return phone;
  }

}
