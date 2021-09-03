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
  oldTodos: Todo[] = [];
  week: number = 0;
  nextWeek!: string;
  previousWeek!: string;
  mondayNumberOfDoneTodos: number = 0;
  filteredAllMondayTodos!: [];
/*
  todos: { id: number, mondayTodos: Todo[], tuesdayTodos: Todo[] }[] = [
    { id: 1, mondayTodos: [], tuesdayTodos: [] },
    { id: 2, mondayTodos: [], tuesdayTodos: [] },
    { id: 3, mondayTodos: [], tuesdayTodos: [] },
    { id: 4, mondayTodos: [], tuesdayTodos: [] },
    { id: 5, mondayTodos: [], tuesdayTodos: [] },
    { id: 6, mondayTodos: [], tuesdayTodos: [] },
    { id: 7, mondayTodos: [], tuesdayTodos: [] },
    { id: 8, mondayTodos: [], tuesdayTodos: [] },
    { id: 9, mondayTodos: [], tuesdayTodos: [] },
    { id: 10, mondayTodos: [], tuesdayTodos: [] },
    { id: 11, mondayTodos: [], tuesdayTodos: [] },
    { id: 12, mondayTodos: [], tuesdayTodos: [] },
  ]*/
  /*
  allMondayTodos: Todo[] = [];
  allTuesdayTodos: Todo[] = [];
  allWednesdayTodos: Todo[] = [];
  allThursdayTodos: Todo[] = [];
  allFridayTodos: Todo[] = [];
  allSaturdayTodos: Todo[] = [];
  allSundayTodos: Todo[] = [];
*/
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

    // Wenn es am Anfang noch keine Daten gibt, wird eine leerer Array in Local Storage gespeichert.
    this.oldTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    
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
      this.addTodo(new Todo(form.value.monday, 'monday', form.value.priority, form.value.done, this.week), 'monday');
    }
    
    form.reset();
  }

  addTodo(todo: Todo, weekday: string) {
    
    switch(weekday) {
      
      case "monday": {
        this.oldTodos.push(todo);
          
        let convertedOldTodos = JSON.stringify(this.oldTodos);
        
        localStorage.setItem('todos', convertedOldTodos);
        
        
        //console.log(localStorage.getItem("todos"))
        break;
      }   
      case "tuesday": {
        //this.allTuesdayTodos.push(todo);
        break;
      }
      default: {
        break;
      }
    }
    console.log(localStorage.getItem("todos"))
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
/*
updateTodoStatus(index: number, weekday: string) { 
  switch(weekday) {
    case "monday": {
      this.allMondayTodos[index].done = !this.allMondayTodos[index].done;
      if (this.allMondayTodos[index].done === true) {
        this.mondayNumberOfDoneTodos += 1;
      } else {
        this.mondayNumberOfDoneTodos -= 1;
      }
      localStorage.setItem("mondayNumberOfDoneTodos", JSON.stringify(this.mondayNumberOfDoneTodos));
      localStorage.setItem('allMondayTodos', JSON.stringify(this.allMondayTodos));
      break;
    }   
    default: {
      break;
    }
  }
}

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
