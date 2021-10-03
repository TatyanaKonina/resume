
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
 todoTitle= ''
  ngOnInit(): void {
    this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
    .subscribe(todos =>{
      this.todos = todos
    })
  }
  addTodo(){
    if (!this.todoTitle.trim()){
      return
    }
    const newTodo:ToDo={
      title:this.todoTitle,
      completed: false
    }
    this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todo=>{
        this.todos.push(todo)
        this.todoTitle = ''
        
      })
  }
}
