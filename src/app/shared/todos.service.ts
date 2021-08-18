import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];

  constructor() { }

  
  public getAllTodos() {
    return this.todos;
  }

  
}
