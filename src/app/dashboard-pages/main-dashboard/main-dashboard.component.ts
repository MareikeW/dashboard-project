import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  week: number = 0;
  nextWeek!: string;
  previousWeek!: string;
  mondayNumberOfDoneTodos: number = 0;

  todos: Todo[] = [];
  allMondayTodos: Todo[] = [];
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

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.week = data.id; 
    });
  }

  getNextWeek() {
    if (this.week <= 11) {
      return this.nextWeek = `/dashboard/main-dashboard/${this.week + 1}`;
    } else {
      return;
    }
  }

  getPreviousWeek() {
    if (this.week >= 2) {
      return this.nextWeek = `/dashboard/main-dashboard/${this.week - 1}`;
    } else {
      return;
    }
  }

  hasNextWeek() {
    if (this.week <= 11) return true 
    else return false;
  } 

  hasPreviousWeek() {
    if (this.week >= 2) return true 
    else return false;
  }

  onTodoSubmit(form: NgForm) {
    if (form.value.monday) {
      this.addTodo(new Todo(form.value.monday, 'monday', form.value.priority, form.value.done), 'monday');
    }
    
    form.reset();
  }

  addTodo(todo: Todo, weekday: string) {
    switch(weekday) {
      case "monday": {
        this.allMondayTodos.push(todo);
        break;
      }   
      case "tuesday": {
        this.allTuesdayTodos.push(todo);
        break;
      }
      default: {
        break;
      }
    }
  }
  /*
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
  }console.log(this.allMondayTodos)
    for (let i = 0; i < this.allMondayTodos.length; i++) {
      
    }
*/
updateTodoStatus(index: number, weekday: string) { 
  switch(weekday) {
    case "monday": {
      this.allMondayTodos[index].done = !this.allMondayTodos[index].done;
      this.mondayNumberOfDoneTodos += 1;
      break;
    }   
    default: {
      break;
    }
  }
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
