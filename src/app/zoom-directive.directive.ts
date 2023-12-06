// zoom.directive.ts

import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  imgNative:any;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.imgNative=el.nativeElement;
  }
@Output('appZoom') eOnZoom=new EventEmitter();

  
 

private getCursorPosition(event:any)
{

  const rect=this.imgNative.getBoundingClientRect();
  const x=event.pageX-rect.left;
  const y=event.pageY-rect.top
  return{x,y,width:rect.width,height:rect.height};
}
@HostListener('mouseleave',['$event']) 
  onMouseLeave(event:any) {
this.eOnZoom.emit(null);
  }
  @HostListener('mousemove',['$event']) 
  onMouseMove(event:any) {
 const pos=this.getCursorPosition(event);
 this.eOnZoom.emit({x:(pos.x/pos.width)*100,y:(pos.y/pos.height)*100});
  }

 
}
