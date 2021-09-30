import { AfterContentChecked, AfterContentInit, AfterViewInit,AfterViewChecked, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit,  SimpleChanges, ViewChild, OnDestroy, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent 
implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{

  @Input()
  post: Post;
  @Output() 
  onRemove = new EventEmitter<number>()
  @ContentChild('info',{static:true})
  infoRef: ElementRef
 
  
  constructor() { 
    console.log('constructor')
  }
  removePost(){
    this.onRemove.emit(this.post.id)

  }

  ngOnInit(): void {
    console.log('ngOnInit')
    // console.log(this.infoRef.nativeElement)
  }
  ngOnChanges(changes:SimpleChanges):void{
    console.log('ngOnChanges',changes)

  }
  ngDoCheck(){
    console.log('check')
  }
  ngAfterContentInit(){
    console.log('content init')
  }
  ngAfterContentChecked(){
    console.log('content checked')
  }

  ngAfterViewInit(){
    console.log('view initt')
  }
  ngAfterViewChecked(){
    console.log('view checked')
  }
  ngOnDestroy(){
    console.log('destroy')
  }

}
