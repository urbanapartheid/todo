import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../services/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos!: Todo[];
  message!: string;

  constructor(private service: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.service.retrieveAllTodos('eric').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  updateTodo(id: number): void{
      //console.log(`update todo ${id}`);
      this.router.navigate(['todos', id]);
  }

  deleteTodo(id: number): void {
    this.service.deleteTodo('eric', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
    //console.log(`delete todo ${id}`);
  }

  addTodo(): void {
    this.router.navigate(['todos', -1]);
  }
}
