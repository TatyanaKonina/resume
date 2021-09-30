import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;
 
  
  constructor() { }

  ngOnInit(): void {
  }

}
