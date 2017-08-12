import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appD1]'
})
export class D1Directive {
  color: string;
  constructor(private el: ElementRef) { }
  @Input() defaultColor: string;
  @Input('appD1') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
