import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ToDo{
  completed:boolean,
  title: string,
  id?: number
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {

  }
  addTodo(todo:ToDo): Observable<ToDo>{
    return this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', todo)
  }
  fetchTodos() : Observable<ToDo[]> {
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
    .pipe(delay(1500))  
  }
  removeTodo(id:number | undefined): Observable<void>{
   return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
}
