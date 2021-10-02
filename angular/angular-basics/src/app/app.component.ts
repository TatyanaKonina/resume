
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


export interface Post{
  title:string
  text:string
  [key : string]: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers : []
})



export class AppComponent {
  constructor(){
  }
}
