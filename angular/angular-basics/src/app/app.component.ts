import { MethodCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

export interface Post{
  title:string
  text:string
  id? : number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})



export class AppComponent{
  date: Date = new Date()
}
