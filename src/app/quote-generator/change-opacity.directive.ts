import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[changeOpacity]'
})

export class ChangeOpacityDirective {

  constructor(private el: ElementRef) { }

   @HostListener('mouseenter') onMouseEnter() {
    this.handleOpacity('1');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.handleOpacity(null);
  }

  private handleOpacity(opacity: string) {
    this.el.nativeElement.style.opacity = opacity;
  }
}