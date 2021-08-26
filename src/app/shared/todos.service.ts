import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [];
  
  mondayTodos: Todo[] = [];
  tuesdayTodos: Todo[] = [];
  wednesdayTodos: Todo[] = [];
  thursdayTodos: Todo[] = [];
  fridayTodos: Todo[] = [];
  saturdayTodos: Todo[] = [];
  sundayTodos: Todo[] = [];
  
  constructor() { }

  
  getAllTodos() {
    let allTodos = [...this.mondayTodos, ...this.tuesdayTodos, ...this.wednesdayTodos, ...this.thursdayTodos, ...this.fridayTodos, ...this.saturdayTodos, ...this.sundayTodos];
    return allTodos;
  }

  getAllMondayTodos() {
    return of(this.mondayTodos);
  }

  getAllTuesdayTodos() {
    return this.tuesdayTodos;
  }

  getAllWednesdayTodos() {
    return this.wednesdayTodos;
  }

  getAllThursdayTodos() {
    return this.thursdayTodos;
  }

  getAllFridayTodos() {
    return this.fridayTodos;
  }

  getAllSaturdayTodos() {
    return this.saturdayTodos;
  }

  getAllSundayTodos() {
    return this.sundayTodos;
  }

  updateTodo(index: number, weekday: string) {
    switch(weekday) {
      case "monday": {
        this.mondayTodos[index].done = !this.mondayTodos[index].done;
        break;
      }   
      case "tuesday": {
        this.tuesdayTodos[index].done = !this.tuesdayTodos[index].done;
        break;
      }
      case "wednesday": {
        this.wednesdayTodos[index].done = !this.wednesdayTodos[index].done;
        break;
      }   
      case "thursday": {
        this.thursdayTodos[index].done = !this.thursdayTodos[index].done;
        break;
      }
      case "friday": {
        this.fridayTodos[index].done = !this.fridayTodos[index].done;
        break;
      }   
      case "saturday": {
        this.saturdayTodos[index].done = !this.saturdayTodos[index].done;
        break;
      }
      case "sunday": {
        this.sundayTodos[index].done = !this.sundayTodos[index].done;
        break;
      }
      default: {
        break;
      }
    }
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
        this.wednesdayTodos.push(todo);
        break;
      }   
      case "thursday": {
        this.thursdayTodos.push(todo);
        break;
      }
      case "friday": {
        this.fridayTodos.push(todo);
        break;
      }   
      case "saturday": {
        this.saturdayTodos.push(todo);
        break;
      }
      case "sunday": {
        this.sundayTodos.push(todo);
        break;
      }
      default: {
        break;
      }
    }
  }
  
}
