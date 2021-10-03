
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export interface ToDo{
  completed:boolean,
  title: string,
  id?: number
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers : []
})



export class AppComponent implements OnInit {
 constructor(private http: HttpClient){
   
 }
 todos: ToDo[]=[]
  ngOnInit(): void {
    this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .subscribe(todos =>{
      this.todos = todos
    })
  }
}
