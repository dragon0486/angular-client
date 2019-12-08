import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITodo } from '../models/todo';
import { ITodoAdd } from '../models/todo-add';
import { Globals } from './global-store';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpclient: HttpClient, private global: Globals) { }

  getAllTodos(): Observable<ITodo[]> {
    return this.httpclient.get<ITodo[]>('http://localhost:5001/api/todo');
  }
  addTodo(todo: ITodoAdd) {
    return this.httpclient.post<ITodo>('http://localhost:5001/api/todo', todo);
  }

  testApi(): Observable<string> {
    const httpOptions: object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.global.token
      }),
      responseType: "text"
    };

    return this.httpclient.get<string>('https://localhost:44326/api/image', httpOptions);
  }
}