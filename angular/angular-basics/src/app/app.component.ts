
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(null)
    })
  }
  submit(){
    const formData = {...this.form.value}
    console.log(formData)
  }
}
