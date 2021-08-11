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
  { path: "dashboard/main-dashboard", component: MainDashboardComponent },
  { path: "dashboard/settings", component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
