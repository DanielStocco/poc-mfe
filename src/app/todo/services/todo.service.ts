import { Injectable } from '@angular/core';

interface Todo {
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];

  constructor() { }

  addTask(todo: Todo) {
    this.todos.push(todo);
  }

  getTasks() {
    return this.todos;
  }
}
