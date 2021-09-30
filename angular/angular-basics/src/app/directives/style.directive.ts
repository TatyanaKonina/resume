import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({selector:'[appStyle]'})


export class StyleDirective {
    @Input('appStyle')
    color:string = 'blue'
    @Input()
    dStyle: {border?:string,fontWeight?:string,borderRadius?:string}
    constructor(private elRef: ElementRef,private render : Renderer2){
        // this.render.setStyle(elRef.nativeElement,'color','blue')
    }

    @HostListener('click',['$event.target'])
    onClick(event:Event){
        console.log(event)
    }
    @HostListener('mouseenter') onEnter(){
        this.render.setStyle(this.elRef.nativeElement,'color',this.color)
        this.render.setStyle(this.elRef.nativeElement,'border',this.dStyle.border)
        this.render.setStyle(this.elRef.nativeElement,'fontWeight',this.dStyle.fontWeight)
        this.render.setStyle(this.elRef.nativeElement,'borderRadius',this.dStyle.borderRadius)
    }
    @HostListener('mouseleave') onLeave(){
        this.render.setStyle(this.elRef.nativeElement,'color',null)
    }
}