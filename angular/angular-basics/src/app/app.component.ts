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
  float = 0.42
  obj = {
    a:1,
    b:{
      c: 2,
      d:{
        e:3,
        f:4
      }
    }
  }
}
