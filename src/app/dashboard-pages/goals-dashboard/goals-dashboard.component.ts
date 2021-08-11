import { Component, OnInit, Input } from '@angular/core';
import { GoalsService } from 'src/app/shared/goals.service';
import { Goal } from "../../shared/goal.model";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-goals-dashboard',
  templateUrl: './goals-dashboard.component.html',
  styleUrls: ['./goals-dashboard.component.scss']
})
export class GoalsDashboardComponent {
  goals!: Goal[];

  constructor(private goalsService: GoalsService) {}

  ngOnInit(): void {
    this.goals = this.goalsService.getAllGoals();
  }

  // neuer Array mit den Werten aus den Formularfeldern wird angelegt und das Formular zurückgesetzt.
  onFormSubmit(form: NgForm) {
    this.goalsService.addGoal(new Goal(form.value.name, form.value.reason, form.value.deadline, form.value.deadlineDescription))
    form.reset();
  }
}
