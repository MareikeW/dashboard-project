import { Component, OnInit, Input } from '@angular/core';
import { GoalsService } from 'src/app/shared/goals.service';
import { Goal } from "../../shared/goal.model";
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
}
