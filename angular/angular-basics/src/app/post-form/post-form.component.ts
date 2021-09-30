import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.sass']
})
export class PostFormComponent implements OnInit {
  @Output()
  onAdd:EventEmitter<Post> = new EventEmitter<Post>()


  constructor() { }
  title: string
  text:string

  ngOnInit(): void {
  }
  addPost(){
    if(this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text:this.text
      }
      this.onAdd.emit(post)
      this.title = this.text = ''
    }

  }

}
