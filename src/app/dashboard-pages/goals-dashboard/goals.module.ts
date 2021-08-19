import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GoalFormComponent } from './goal-form/goal-form.component';
import { GoalsDisplayComponent } from './goals-display/goals-display.component';

const CUSTOM_ELEMENTS_SCHEMA: SchemaMetadata;

@NgModule({
  declarations: [
    GoalFormComponent,
    GoalsDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GoalsModule { }
