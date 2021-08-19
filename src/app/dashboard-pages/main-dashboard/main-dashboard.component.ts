import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { TodosService } from 'src/app/shared/todos.service';
import { NgForm } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  todos: Todo[] = [];

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

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.todos = this.todosService.getAllTodos();
  }
  
  onTodoSubmit(form: NgForm) {
    //console.log(form.value.monday)
    if (form.value.monday) {
        console.log("Hello Monday")
        this.todosService.addTodo(new Todo(form.value.monday), 'monday');
      }
    else if (form.value.tuesday) {
      console.log("Hello Tuesday")
        this.todosService.addTodo(new Todo(form.value.tuesday), 'tuesday');
    }
    form.reset();

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
