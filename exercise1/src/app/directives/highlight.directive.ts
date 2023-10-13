import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding() background: string = 'hotpink'

  @HostListener('mouseenter') mouseEnter(){
    console.log('mouse enter'	)
    this.el.nativeElement.style.backgroundColor = 'yellow'
  }

  @HostListener('mouseleave') mouseLeave(){
    this.el.nativeElement.style.backgroundColor = 'hotpink'
    console.log('mouse leave')
  }

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = this.background
  }



}
