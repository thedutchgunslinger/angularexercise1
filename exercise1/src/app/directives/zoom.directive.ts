import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]',
})
export class ZoomDirective {


  @HostBinding('style.width') width: string = '200px';
  @HostListener('mouseenter') mouseEnter() {
    this.width = 400 + 'px';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.width = '200px';
  }

  constructor(

  ) {
  }
}
