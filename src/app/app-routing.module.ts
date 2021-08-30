import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { GoalsDashboardComponent } from './dashboard-pages/goals-dashboard/goals-dashboard.component';
import { MainDashboardComponent } from './dashboard-pages/main-dashboard/main-dashboard.component';
import { SettingsComponent } from './dashboard-pages/settings/settings.component';

const routes: Routes = [
  { path: "", redirectTo: "/signin", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent},
  { path: "dashboard/goals-dashboard", component: GoalsDashboardComponent },
  { path: "dashboard/main-dashboard/1", component: MainDashboardComponent, data: { id: 1 } },
  { path: "dashboard/main-dashboard/2", component: MainDashboardComponent, data: { id: 2 } },
  { path: "dashboard/main-dashboard/3", component: MainDashboardComponent, data: { id: 3 } },
  { path: "dashboard/main-dashboard/4", component: MainDashboardComponent, data: { id: 4 } },
  { path: "dashboard/main-dashboard/5", component: MainDashboardComponent, data: { id: 5 } },
  { path: "dashboard/main-dashboard/6", component: MainDashboardComponent, data: { id: 6 } },
  { path: "dashboard/main-dashboard/7", component: MainDashboardComponent, data: { id: 7 } },
  { path: "dashboard/main-dashboard/8", component: MainDashboardComponent, data: { id: 8 } },
  { path: "dashboard/main-dashboard/9", component: MainDashboardComponent, data: { id: 9 } },
  { path: "dashboard/main-dashboard/10", component: MainDashboardComponent, data: { id: 10 } },
  { path: "dashboard/main-dashboard/11", component: MainDashboardComponent, data: { id: 11 } },
  { path: "dashboard/main-dashboard/12", component: MainDashboardComponent, data: { id: 12 } },
  { path: "dashboard/settings", component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
