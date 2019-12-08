import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ITodo } from 'src/app/models/todo';
import { ActivatedRoute } from '@angular/router';
import { Globals } from 'src/app/services/global-store';

@Component({
  selector: 'ac-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss']
})
export class TodoTableComponent implements AfterViewInit, OnInit {
  todos: ITodo[]
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'completed'];

  constructor(private todoservice: TodoService, private route: ActivatedRoute, private globals: Globals) {

  }
  ngOnInit() {
    // this.todoservice.getAllTodos().subscribe(todos => {
    //   this.todos = todos;
    //   console.log(this.todos)
    // })

    this.route.queryParams.subscribe(params => {
      console.log(this.globals.token)
      this.globals.token = params["token"]
      console.log(this.globals.token)
    })
    console.log(this.globals.token);
    this.todoservice.testApi().subscribe(str => {
      console.log(atob(str));
    })
  }

  ngAfterViewInit() {

  }
}
