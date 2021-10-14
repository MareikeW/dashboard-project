import { Injectable } from '@angular/core';
import { Goal } from "../shared/goal.model";

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  goals: Goal[] = [];

  constructor() { }

  getAllGoals() {
    this.goals = JSON.parse(localStorage.getItem('goals') || '[]');
    return this.goals;
  }

  addGoal(goal: Goal) {
    this.goals.push(goal);
    this.storeGoals()
  }

  markAsAccomplished(index: number) {
    this.goals[index].accomplished = !this.goals[index].accomplished;
    this.storeGoals()
  }

  updateGoal(index: number, updatedGoal: Goal) {
    this.goals[index] = updatedGoal;
    this.storeGoals()
  }

  deleteGoal(index: number) {
    this.goals.splice(index, 1);
    this.storeGoals()
  }

  storeGoals() {
    let convertedGoals = JSON.stringify(this.goals);
    localStorage.setItem('goals', convertedGoals);
  }
}
