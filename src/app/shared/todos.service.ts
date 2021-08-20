import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];

  mondayTodos: Todo[] = [];
  tuesdayTodos: Todo[] = [];
  
  constructor() { }

  
  getAllTodos() {
    let allTodos = [...this.mondayTodos, ...this.tuesdayTodos]
    return allTodos;
  }

  getAllMondayTodos() {
    return this.mondayTodos;
  }

  addTodo(todo: Todo, weekday: string) {
    switch(weekday) {
      case "monday": {
        this.mondayTodos.push(todo);
        break;
      }   
      case "tuesday": {
        this.tuesdayTodos.push(todo);
        break;
      }
      case "wednesday": {

        break;
      }   
      case "thursday": {

        break;
      }
      case "friday": {

        break;
      }   
      case "saturday": {

        break;
      }
      case "sunday": {
 
        break;
      }
      default: {
        break;
      }
    }
  }
  
}
