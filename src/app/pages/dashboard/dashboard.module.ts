import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';

import { DashboardComponent } from './dashboard.component';
import { GoalsDashboardComponent } from '../../dashboard-pages/goals-dashboard/goals-dashboard.component';
import { SettingsComponent } from '../../dashboard-pages/settings/settings.component';
import { MainDashboardComponent } from '../../dashboard-pages/main-dashboard/main-dashboard.component';
import { GoalFormComponent } from '../../dashboard-pages/goals-dashboard/goal-form/goal-form.component';
import { GoalsDisplayComponent } from '../../dashboard-pages/goals-dashboard/goals-display/goals-display.component';
import { WeeklyPlannerComponent } from '../../dashboard-pages/main-dashboard/weekly-planner/weekly-planner.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GoalsDashboardComponent,
    SettingsComponent,
    MainDashboardComponent,
    GoalFormComponent,
    GoalsDisplayComponent,
    WeeklyPlannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class DashboardModule { }
