import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({selector:'[appStyle]'})


export class StyleDirective {
    constructor(private elRef: ElementRef,private render : Renderer2){
        this.render.setStyle(elRef.nativeElement,'color','blue')
    }

    @HostListener('click',['$event.target'])
    onClick(event:Event){
        console.log(event)
    }
    @HostListener('mouseenter') onEnter(){
        this.render.setStyle(this.elRef.nativeElement,'color','red')
    }
    @HostListener('mouseleave') onLeave(){
        this.render.setStyle(this.elRef.nativeElement,'color',null)
    }
}