import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer){}

  transform(value: string, url: string): any {
    //return a kind object SafeResourceUrl
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    console.log(this.domSanitizer.bypassSecurityTrustResourceUrl(url));
  }

}
