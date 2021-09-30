import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({selector:'[appStyle]'})


export class StyleDirective {
    @Input('appStyle')
    color:string = 'blue'
    @Input()
    dStyle: {border?:string,fontWeight?:string,borderRadius?:string}
    constructor(private elRef: ElementRef,private render : Renderer2){
        // this.render.setStyle(elRef.nativeElement,'color','blue')
    }
    @HostBinding('style.color') elColor = 'black'

    @HostListener('click',['$event.target'])
    onClick(event:Event){
        console.log(event)
    }
    @HostListener('mouseenter') onEnter(){
        this.elColor = this.color
    }
    @HostListener('mouseleave') onLeave(){
       this.elColor = 'black'
    }
}