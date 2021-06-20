import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseEvent]'
})
export class MouseEventDirective {

  constructor(private el: ElementRef, private r: Renderer2) { }

  @HostListener('click',['$event'])
  onClick(event:Event){
      console.log(event.target)
  }
  @HostListener('mouseenter' )
  onMouseEnter() {
    
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // this.highlight(null);
   // this.r.setStyle(this.el.nativeElement, '')
  }
}
