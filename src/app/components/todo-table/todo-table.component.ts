import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'ac-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss']
})
export class TodoTableComponent implements AfterViewInit, OnInit {
  todos:ITodo[]
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title','completed'];

  constructor(private todoservice:TodoService){

  }
  ngOnInit() {
      this.todoservice.getAllTodos().subscribe(todos =>{
        this.todos = todos;
        console.log(this.todos)
      })
  }

  ngAfterViewInit() {

  }
}
