import { MethodCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

export interface Post{
  title:string
  text:string
  [key : string]: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})



export class AppComponent{
  search: ''
  searchField = 'title'
  posts: Post[] = [
    {title: 'Beer', text: 'ok'},
    {title: 'Bread', text: 'not ok'}
  ]
}
