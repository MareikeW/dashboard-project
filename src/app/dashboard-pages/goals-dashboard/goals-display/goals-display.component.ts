import { Component, OnInit } from '@angular/core';
import { GoalsService } from 'src/app/shared/goals.service';
import { Goal } from "../../../shared/goal.model";

@Component({
  selector: 'app-goals-display',
  templateUrl: './goals-display.component.html',
  styleUrls: ['./goals-display.component.scss']
})
export class GoalsDisplayComponent implements OnInit {

  goals!: Goal[];
  
  constructor(private goalsService: GoalsService) {}

  ngOnInit(): void {
    this.goals = this.goalsService.getAllGoals();
  }

  changeDateFormat(date: string) {
    if (date) {
      let dateArray = date.split('-');
      const [year, month, day] = dateArray;
      return `${day}.${month}.${year}`
    }
    return 
  }
}
