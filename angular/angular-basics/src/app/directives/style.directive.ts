import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({selector:'[appStyle]'})


export class StyleDirective {
    constructor(private elRef: ElementRef,private render : Renderer2){
        // elRef.nativeElement.style.color = 'red'
        this.render.setStyle(elRef.nativeElement,'color','blue')
    }
}