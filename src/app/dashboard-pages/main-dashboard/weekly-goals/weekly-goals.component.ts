import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeekGoal } from 'src/app/shared/weekgoal.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weekly-goals',
  templateUrl: './weekly-goals.component.html',
  styleUrls: ['./weekly-goals.component.scss']
})
export class WeeklyGoalsComponent implements OnInit {
  allWeekGoals: WeekGoal[] = [];
  currentWeeksGoals: WeekGoal[] = [];

  week: number = 0;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.week = data.id; 
    });

    // If at the beginning there is no data saved, an empty array will be saved into LocalStorage.
    this.allWeekGoals = JSON.parse(localStorage.getItem('weekgoals') || '[]');

    for (let i = 0; i < this.allWeekGoals.length; i++) {
      if (this.allWeekGoals[i].week === this.week) {
        this.currentWeeksGoals.push(this.allWeekGoals[i]);
      }
    }
  }

  onWeekGoalSubmit(form: NgForm) {
    if (form.value.weekGoal) {
      this.addWeekGoal(new WeekGoal(form.value.weekGoal, this.week))
    }

    form.reset();
  }

  addWeekGoal(weekGoal: WeekGoal) {
    this.currentWeeksGoals.push(weekGoal);
    this.allWeekGoals.push(weekGoal);
    this.addToLocalStorage();
  }

  addToLocalStorage() {
    let jsonWeekGoals = JSON.stringify(this.allWeekGoals);
    localStorage.setItem('weekgoals', jsonWeekGoals);
  }
}
