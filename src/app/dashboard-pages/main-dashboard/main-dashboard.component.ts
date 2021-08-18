import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { TodosService } from 'src/app/shared/todos.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  dailyTodoLists = {
    isMondayDisplayed: false,
    isTuesdayDisplayed: false,
    isWednesdayDisplayed: false,
    isThursdayDisplayed: false,
    isFridayDisplayed: false,
    isSaturdayDisplayed: false,
    isSundayDisplayed: false
  };

  dailyTodos = [
    { weekday: "monday", todos: [], todosPriorities: [] },
    { weekday: "tuesday", todos: [], todosPriorities: [] },
    { weekday: "wednesday", todos: [], todosPriorities: [] },
    { weekday: "thursday", todos: [], todosPriorities: [] },
    { weekday: "friday", todos: [], todosPriorities: [] },
    { weekday: "saturday", todos: [], todosPriorities: [] },
    { weekday: "sunday", todos: [], todosPriorities: [] },
  ]

  todos: Todo[] = [];

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.getAllTodos();
  }

  addTodo(weekday: string, todo: string) {
    switch(weekday) {
      case "monday": {
        
        break;
      }   
      case "tuesday": {

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
    console.log(this.todos)
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
        this.dailyTodoLists.isMondayDisplayed = !this.dailyTodoLists.isWednesdayDisplayed;
        break;
      }   
      case "thursday": {
        this.dailyTodoLists.isTuesdayDisplayed = !this.dailyTodoLists.isThursdayDisplayed;
        break;
      }
      case "friday": {
        this.dailyTodoLists.isMondayDisplayed = !this.dailyTodoLists.isFridayDisplayed;
        break;
      }   
      case "saturday": {
        this.dailyTodoLists.isTuesdayDisplayed = !this.dailyTodoLists.isSaturdayDisplayed;
        break;
      }
      case "sunday": {
        this.dailyTodoLists.isTuesdayDisplayed = !this.dailyTodoLists.isSundayDisplayed;
        break;
      }
      default: {
        break;
      }
    }
  }
}
