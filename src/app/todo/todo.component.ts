import { JsonPipe } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { TodoService } from '../todo.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  private todoService = inject(TodoService)
  todoId = input.required<string>()
  todo = signal({})

  constructor() {
    toObservable(this.todoId).pipe(switchMap((res: any) => {
      return this.todoService.getTodo(this.todoId())
    })).subscribe((res) => {
      console.log(res)
      this.todo.set(res);
    })
  }
}
