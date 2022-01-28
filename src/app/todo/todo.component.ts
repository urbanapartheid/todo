import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../services/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id!: number;
  todo!: Todo;

  constructor(private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoService.retrieveTodo('eric', this.id).subscribe(
        response => this.todo = response
      );
    }
  }

  saveTodo(): void {
    if (this.id === -1) {
      //Create todo
      this.todoService.createTodo('eric', this.todo)
        .subscribe(data => { 
          console.log(data);
          this.router.navigate(['todos']);
        })
    } else {
      this.todoService.updateTodo('eric', this.id, this.todo)
        .subscribe(data => {
          console.log(data);
          //this.router.navigateByUrl('/todos');
          this.router.navigate(['todos']);
        });
    }
  }
}
