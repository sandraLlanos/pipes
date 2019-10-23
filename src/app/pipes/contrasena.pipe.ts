import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, ver: boolean = true): any {
    if (ver) {
      let newValue = value.replace(/./g, '*');
      return newValue;
    }else{
      return value;
    }
    
  }
}
