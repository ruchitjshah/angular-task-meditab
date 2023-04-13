import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorrect: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('click') answer(){
    if(this.isCorrect){
      this.renderer.setStyle(this.el.nativeElement,'background','green');
      this.renderer.setStyle(this.el.nativeElement,'color','#fff');
      this.renderer.setStyle(this.el.nativeElement,'border','2px solid grey');
    }else{
      this.renderer.setStyle(this.el.nativeElement,'background','red');
      this.renderer.setStyle(this.el.nativeElement,'color','#fff');
      this.renderer.setStyle(this.el.nativeElement,'border','2px solid grey');
    }
  }
}
