import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'ac-todo-for',
  templateUrl: './todo-for.component.html',
  styleUrls: ['./todo-for.component.scss']
})
export class TodoForComponent {
  addressForm = this.fb.group({
    title:[null, Validators.required],
    
  });

  constructor(private fb: FormBuilder,
    private todoService:TodoService,
    private snackBar:MatSnackBar,
    private router:Router) {}

  onSubmit() {
    if(this.addressForm.valid){
      const todo = this.addressForm.value;
      this.todoService.addTodo(todo).subscribe(td=>{
          this.snackBar.open("successful!",'close',{duration:5000});
          this.router.navigate(['/todo'])
      });
    }
  }
}
