import { Injectable } from '@angular/core';
import { Goal } from "../shared/goal.model";

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  goals: Goal[] = [
    new Goal("This is a test", "My Why", "Finish Project"),
    new Goal("This is a test", "My Why", "Finish Project")
  ];

  constructor() { }

  getAllGoals() {
    return this.goals;
  }

  addGoal(goal: Goal) {
    this.goals.push(goal);
  }

  updateGoal(index: number, updatedGoal: Goal) {
    this.goals[index] = updatedGoal;
  }

  deleteGoal(index: number) {
    this.goals.splice(index, 1);
  }
}
