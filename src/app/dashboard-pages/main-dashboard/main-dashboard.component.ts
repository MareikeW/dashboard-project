import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { TodosService } from 'src/app/shared/todos.service';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  todos: Todo[] = [];
  allMondayTodos$: Todo[] = [];
  allTuesdayTodos: Todo[] = [];
  allWednesdayTodos: Todo[] = [];
  allThursdayTodos: Todo[] = [];
  allFridayTodos: Todo[] = [];
  allSaturdayTodos: Todo[] = [];
  allSundayTodos: Todo[] = [];

  dailyTodoLists = {
    isMondayDisplayed: false,
    isTuesdayDisplayed: false,
    isWednesdayDisplayed: false,
    isThursdayDisplayed: false,
    isFridayDisplayed: false,
    isSaturdayDisplayed: false,
    isSundayDisplayed: false
  };

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todos = this.todosService.getAllTodos();
    this.todosService.getAllMondayTodos().subscribe(res => {
      this.allMondayTodos$ = res;
    });
    
    this.allTuesdayTodos = this.todosService.getAllTuesdayTodos();
    this.allWednesdayTodos = this.todosService.getAllWednesdayTodos();
    this.allThursdayTodos = this.todosService.getAllThursdayTodos();
    this.allFridayTodos = this.todosService.getAllFridayTodos();
    this.allSaturdayTodos = this.todosService.getAllSaturdayTodos();
    this.allSundayTodos = this.todosService.getAllSundayTodos();
  }
  
  onTodoSubmit(form: NgForm) {
    if (form.value.monday) {
        this.todosService.addTodo(new Todo(form.value.monday, 'monday', form.value.priority, form.value.done), 'monday');
      }
    else if (form.value.tuesday) {
      this.todosService.addTodo(new Todo(form.value.tuesday, 'tuesday', form.value.priority, form.value.done), 'tuesday');
    }
    else if (form.value.wednesday) {
      this.todosService.addTodo(new Todo(form.value.wednesday, 'wednesday', form.value.priority, form.value.done), 'wednesday');
    }
    else if (form.value.thursday) {
      this.todosService.addTodo(new Todo(form.value.thursday, 'thursday', form.value.priority, form.value.done), 'thursday');
    }
    else if (form.value.friday) {
      this.todosService.addTodo(new Todo(form.value.friday, 'friday', form.value.priority, form.value.done), 'friday');
    }
    else if (form.value.saturday) {
      this.todosService.addTodo(new Todo(form.value.saturday, 'saturday', form.value.priority, form.value.done), 'saturday');
    }
    else if (form.value.sunday) {
      this.todosService.addTodo(new Todo(form.value.sunday, 'sunday', form.value.priority, form.value.done), 'sunday');
    }
    form.reset();
  }

  updateTodoStatus(indexOfTodo: number, weekday: string) {
    this.todosService.updateTodo(indexOfTodo, weekday);
  }

  toggleTodoList(weekday: string) {
    switch(weekday) {
      case "monday": {
        this.dailyTodoLists.isMondayDisplayed = !this.dailyTodoLists.isMondayDisplayed;
        break;
      }   
      case "tuesday": {
        this.dailyTodoLists.isTuesdayDisplayed = !this.dailyTodoLists.isTuesdayDisplayed;
        break;
      }
      case "wednesday": {
        this.dailyTodoLists.isWednesdayDisplayed = !this.dailyTodoLists.isWednesdayDisplayed;
        break;
      }   
      case "thursday": {
        this.dailyTodoLists.isThursdayDisplayed = !this.dailyTodoLists.isThursdayDisplayed;
        break;
      }
      case "friday": {
        this.dailyTodoLists.isFridayDisplayed = !this.dailyTodoLists.isFridayDisplayed;
        break;
      }   
      case "saturday": {
        this.dailyTodoLists.isSaturdayDisplayed = !this.dailyTodoLists.isSaturdayDisplayed;
        break;
      }
      case "sunday": {
        this.dailyTodoLists.isSundayDisplayed = !this.dailyTodoLists.isSundayDisplayed;
        break;
      }
      default: {
        break;
      }
    }
  }
}
