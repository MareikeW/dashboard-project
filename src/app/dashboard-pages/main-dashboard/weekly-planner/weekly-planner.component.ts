import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

/* Task: Implement a function to delete a todo that has been added in the weekly-planner component */

/* Task: Take the logic of adding/updating a todo and put it in its own seperate function
(weekly-planner component, see e.g. habit-tracker where it has already be implemented) */
@Component({
  selector: 'app-weekly-planner',
  templateUrl: './weekly-planner.component.html',
  styleUrls: ['./weekly-planner.component.scss']
})
export class WeeklyPlannerComponent implements OnInit {
  allTodos: Todo[] = []; // todos of ALL the components
  currentWeeksMondayTodos: Todo[] = []; // todos of this component, here: all monday todos of this component
  currentWeeksTuesdayTodos: Todo[] = [];
  currentWeeksWednesdayTodos: Todo[] = [];
  currentWeeksThursdayTodos: Todo[] = [];
  currentWeeksFridayTodos: Todo[] = [];
  currentWeeksSaturdayTodos: Todo[] = [];
  currentWeeksSundayTodos: Todo[] = [];

  dailyTodoLists = {
    isMondayDisplayed: false,
    isTuesdayDisplayed: false,
    isWednesdayDisplayed: false,
    isThursdayDisplayed: false,
    isFridayDisplayed: false,
    isSaturdayDisplayed: false,
    isSundayDisplayed: false
  };

  week: number = 0;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.week = data.id;
    });

    // If at the beginning there is no data saved, an empty array will be saved into LocalStorage.
    this.allTodos = JSON.parse(localStorage.getItem('todos') || '[]');

    // If the component gets reloaded, then only the todos of this week will be displayed.
    for (let i = 0; i < this.allTodos.length; i++) {
      if (this.allTodos[i].week === this.week) {
        switch (this.allTodos[i].weekday) {
          case 'monday': {
            this.currentWeeksMondayTodos.push(this.allTodos[i]);
            break;
          } case 'tuesday': {
            this.currentWeeksTuesdayTodos.push(this.allTodos[i]);
            break;
          } case 'wednesday': {
            this.currentWeeksWednesdayTodos.push(this.allTodos[i]);
            break;
          } case 'thursday': {
            this.currentWeeksThursdayTodos.push(this.allTodos[i]);
            break;
          } case 'friday': {
            this.currentWeeksFridayTodos.push(this.allTodos[i]);
            break;
          } case 'saturday': {
            this.currentWeeksSaturdayTodos.push(this.allTodos[i]);
            break;
          } case 'sunday': {
            this.currentWeeksSundayTodos.push(this.allTodos[i]);
            break;
          }
        }
      }
    }
  }

  onTodoSubmit(form: NgForm) {
    if (form.value.monday) {
      this.addTodo(new Todo(form.value.monday, 'monday', form.value.priority, form.value.done, this.week))
    } else if (form.value.tuesday) {
      this.addTodo(new Todo(form.value.tuesday, 'tuesday', form.value.priority, form.value.done, this.week))
    } else if (form.value.wednesday) {
      this.addTodo(new Todo(form.value.wednesday, 'wednesday', form.value.priority, form.value.done, this.week))
    } else if (form.value.thursday) {
      this.addTodo(new Todo(form.value.thursday, 'thursday', form.value.priority, form.value.done, this.week))
    } else if (form.value.friday) {
      this.addTodo(new Todo(form.value.friday, 'friday', form.value.priority, form.value.done, this.week))
    } else if (form.value.saturday) {
      this.addTodo(new Todo(form.value.saturday, 'saturday', form.value.priority, form.value.done, this.week))
    } else if (form.value.sunday) {
      this.addTodo(new Todo(form.value.sunday, 'sunday', form.value.priority, form.value.done, this.week))
    }

    form.reset();
  }

  addTodo(todo: Todo) {
    this.allTodos.push(todo);
    // adds todo to array in LocalStorage
    // this should be put into its own function and then be called here
    let convertedAllTodos = JSON.stringify(this.allTodos);
    localStorage.setItem('todos', convertedAllTodos);

    switch (todo.weekday) {
      case 'monday': {
        this.currentWeeksMondayTodos.push(todo);
        break;
      } case 'tuesday': {
        this.currentWeeksTuesdayTodos.push(todo);
        break;
      } case 'wednesday': {
        this.currentWeeksWednesdayTodos.push(todo);
        break;
      } case 'thursday': {
        this.currentWeeksThursdayTodos.push(todo);
        break;
      } case 'friday': {
        this.currentWeeksFridayTodos.push(todo);
        break;
      } case 'saturday': {
        this.currentWeeksSaturdayTodos.push(todo);
        break;
      } case 'sunday': {
        this.currentWeeksSundayTodos.push(todo);
        break;
      }
    }
  }

  updateTodoStatus(todo: Todo) {
    for (let oneTodo of this.allTodos) {
      if (todo.week === oneTodo.week && todo.task === oneTodo.task && todo.weekday === oneTodo.weekday) {
        oneTodo.done = !oneTodo.done;
      }
    }

    // updates the saved todos in LocalStorage
    // this should be put into its own function and then be called here
    let convertedAllTodos = JSON.stringify(this.allTodos);
    localStorage.setItem('todos', convertedAllTodos);
  }

  deleteTodo(index: number, weekday: string) {
     // deletes todo from array in LocalStorage
    switch (weekday) {
      case 'monday': {
        this.currentWeeksMondayTodos.splice(index, 1);
        break;
      } case 'tuesday': {
        this.currentWeeksTuesdayTodos.splice(index, 1);
        break;
      } case 'wednesday': {
        this.currentWeeksWednesdayTodos.splice(index, 1);
        break;
      } case 'thursday': {
        this.currentWeeksThursdayTodos.splice(index, 1);
        break;
      } case 'friday': {
        this.currentWeeksFridayTodos.splice(index, 1);
        break;
      } case 'saturday': {
        this.currentWeeksSaturdayTodos.splice(index, 1);
        break;
      } case 'sunday': {
        this.currentWeeksSundayTodos.splice(index, 1);
        break;
      }
    }

    this.allTodos = this.allTodos.filter((t: Todo) => {
      return t.week !== this.week
    })


   let weekTodos = [...this.currentWeeksMondayTodos,...this.currentWeeksTuesdayTodos,...this.currentWeeksWednesdayTodos, this.currentWeeksThursdayTodos, this.currentWeeksFridayTodos, this.currentWeeksSaturdayTodos, this.currentWeeksSundayTodos];
   weekTodos = weekTodos.filter((t) => {
     return Object.keys(t)?.length !== 0
   })

   let finalTodos = [ ...this.allTodos, ...weekTodos];

   let newTodos: Todo[] = [];
   finalTodos.forEach((t: any) => {
     if(t.weekday) {
       newTodos.push(t);
     }
   })

   this.allTodos = newTodos;

   localStorage.setItem('todos', JSON.stringify(this.allTodos));
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
