import { Injectable } from '@angular/core';
import { Goal } from "../shared/goal.model";

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  goals: Goal[] = [];

  constructor() { }

  getAllGoals() {
    return this.goals;
  }

  addGoal(goal: Goal) {
    this.goals.push(goal);
  }

  markAsAccomplished(index: number) {
    this.goals[index].accomplished = !this.goals[index].accomplished;
  }

  updateGoal(index: number, updatedGoal: Goal) {
    this.goals[index] = updatedGoal;
  }

  deleteGoal(index: number) {
    this.goals.splice(index, 1);
  }
}
