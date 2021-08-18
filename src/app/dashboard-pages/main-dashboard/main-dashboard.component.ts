import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
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
