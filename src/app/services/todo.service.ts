import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../models/todo';
import { ITodoAdd } from '../models/todo-add';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpclient:HttpClient) {}

  getAllTodos():Observable<ITodo[]>{
    return this.httpclient.get<ITodo[]>('http://localhost:5001/api/todo');
  }
  addTodo(todo:ITodoAdd){
      return this.httpclient.post<ITodo>('http://localhost:5001/api/todo',todo);
  }
}