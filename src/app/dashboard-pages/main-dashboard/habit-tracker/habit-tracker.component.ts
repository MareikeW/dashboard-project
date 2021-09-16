import { Component, OnInit } from '@angular/core';
import { Habit } from 'src/app/shared/habit.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-habit-tracker',
  templateUrl: './habit-tracker.component.html',
  styleUrls: ['./habit-tracker.component.scss']
})
export class HabitTrackerComponent implements OnInit {
  allHabits: Habit[] = [];
  currentWeeksHabits: Habit[] = [];

  week: number = 0;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.week = data.id; 
    });

    // Wenn es am Anfang noch keine Daten gibt, wird eine leerer Array in Local Storage gespeichert.
    this.allHabits = JSON.parse(localStorage.getItem('habits') || '[]');

    for (let i = 0; i < this.allHabits.length; i++) {
      if (this.allHabits[i].week === this.week) {
        this.currentWeeksHabits.push(this.allHabits[i]);
      }
    }
  }

  onHabitSubmit(form: NgForm) {
    if (form.value.habit) {
      this.addHabit(new Habit(this.week, form.value.habit))
    }

    form.reset();
  }

  addHabit(habit: Habit) {
    this.currentWeeksHabits.push(habit);
    this.allHabits.push(habit);
    this.addToLocalStorage();
  }

  updateHabitStatus(habit: Habit, weekday: string) {   
    for (let oneHabit of this.allHabits) {
      if (habit.week === oneHabit.week && habit.habitName === oneHabit.habitName) {
        switch(weekday) {
          case 'monday': {
            oneHabit.isMondayDone = !oneHabit.isMondayDone;
            break;
          }
          case 'tuesday': {
            oneHabit.isTuesdayDone = !oneHabit.isTuesdayDone;
            break;
          } 
          case 'wednesday': {
            oneHabit.isWednesdayDone = !oneHabit.isWednesdayDone;
            break;
          }
          case 'thursday': {
            oneHabit.isThursdayDone = !oneHabit.isThursdayDone;
            break;
          }
          case 'friday': {
            oneHabit.isFridayDone = !oneHabit.isFridayDone;
            break;
          }
          case 'saturday': {
            oneHabit.isSaturdayDone = !oneHabit.isSaturdayDone;
            break;
          }
          case 'sunday': {
            oneHabit.isSundayDone = !oneHabit.isSundayDone;
            break;
          } 
          default: {
            break;
          }
        }
      }
    }

    this.addToLocalStorage();
  }

  addToLocalStorage() {
    // aktualisiert den Gewohnheitenstand "true/false" in localStorage
    let jsonHabits = JSON.stringify(this.allHabits);
    localStorage.setItem('habits', jsonHabits);
  }
}
