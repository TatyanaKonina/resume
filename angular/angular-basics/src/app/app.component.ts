
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{delay} from 'rxjs/operators'
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
 loading:boolean = false
 todos: ToDo[]=[]
 todoTitle= ''
 
  ngOnInit(): void {
    this.fetchTodos()
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
  fetchTodos(){
    this.loading = true
    this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
    .pipe(delay(1500))  
    .subscribe(todos =>{
        this.todos = todos
        this.loading = false
      })
    
  }
}
