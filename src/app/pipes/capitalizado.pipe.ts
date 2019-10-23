import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  // transform(value: string, args1, args2, args3 ): string {
  transform(value: string, todas:boolean = true ): string {
    console.log(value);
    // console.log(args1);
    // console.log(args2);
    // console.log(args3);


    value = value.toLowerCase();
    // console.log(value);

    let nombres = value.split(" ");
    // console.log(nombres);
    if (todas) {
      for (let i = 0; i < nombres.length; i++) {
        nombres[i] = nombres[i][0].charAt(0).toUpperCase() + nombres[i].slice(1);
        console.log(nombres);
      }      
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);

    }
    return nombres.join(" ");

  }

}
