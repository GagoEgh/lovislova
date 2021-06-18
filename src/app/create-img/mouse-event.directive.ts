import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseEvent]'
})
export class MouseEventDirective {

  constructor(private el: ElementRef, private r: Renderer2) { }

  

  @HostListener('mouseenter' )
  onMouseEnter() {
   // this.r.setStyle(this.el.nativeElement, 'opacity','1')
   
    
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // this.highlight(null);
  }
}
