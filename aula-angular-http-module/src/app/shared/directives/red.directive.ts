import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(elementRef: ElementRef) {
    console.log(elementRef);
    elementRef.nativeElement.style.color = 'red';
  }

}
