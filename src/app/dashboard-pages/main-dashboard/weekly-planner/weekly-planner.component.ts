import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weekly-planner',
  templateUrl: './weekly-planner.component.html',
  styleUrls: ['./weekly-planner.component.scss']
})
export class WeeklyPlannerComponent implements OnInit {
  allTodos: Todo[] = []; // sämtliche Todos aus allen Komponenten
  currentWeeksMondayTodos: Todo[] = []; // aktuelle Todos von einer Komponente
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

    // Wenn es am Anfang noch keine Daten gibt, wird eine leerer Array in Local Storage gespeichert.
    this.allTodos = JSON.parse(localStorage.getItem('todos') || '[]');

    // Wenn eine Komponente neu lädt, dann werden nur die Todos angezeigt, die zu dieser Woche gehören.
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

    // aktualisiert den Aufgabenstand "true/false" in localStorage
    let convertedAllTodos = JSON.stringify(this.allTodos);
    localStorage.setItem('todos', convertedAllTodos);
  }
/*
  deleteTodos() {
    this.allMondayTodos = [];
    this.mondayNumberOfDoneTodos = 0;
    localStorage.removeItem("mondayNumberOfDoneTodos");
    localStorage.removeItem('allMondayTodos');
  }
*/
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
