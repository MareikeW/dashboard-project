import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { GoalsDashboardComponent } from './dashboard-pages/goals-dashboard/goals-dashboard.component';
import { SettingsComponent } from './dashboard-pages/settings/settings.component';
import { MainDashboardComponent } from './dashboard-pages/main-dashboard/main-dashboard.component';
import { GoalFormComponent } from './dashboard-pages/goals-dashboard/goal-form/goal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    SigninComponent,
    GoalsDashboardComponent,
    SettingsComponent,
    MainDashboardComponent,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
