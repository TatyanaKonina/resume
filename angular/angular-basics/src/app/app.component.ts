
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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



export class AppComponent implements OnInit{
  form: FormGroup
  ngOnInit(){
    this.form = new FormGroup({})
  }
  submit(){
    console.log(this.form)
  }
}
