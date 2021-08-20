import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { TodosService } from 'src/app/shared/todos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  todos: Todo[] = [];
  allMondayTodos: Todo[] = [];
  

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
    this.allMondayTodos = this.todosService.getAllMondayTodos();
  }
  
  onTodoSubmit(form: NgForm) {
    if (form.value.monday) {
        this.todosService.addTodo(new Todo(form.value.monday, 'monday', form.value.priority, form.value.done), 'monday');
      }
    else if (form.value.tuesday) {
        //this.todosService.addTodo(new Todo(form.value.tuesday, 'tuesday', form.value.priority), 'tuesday');
    }
    form.reset();
    console.log(this.todosService.getAllTodos());
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
