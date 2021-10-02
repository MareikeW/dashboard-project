import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  week: number = 0;
  nextWeek!: string;
  previousWeek!: string;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.week = data.id; 
    });  
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
}
