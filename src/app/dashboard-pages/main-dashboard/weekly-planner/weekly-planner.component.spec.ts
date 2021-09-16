import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyPlannerComponent } from './weekly-planner.component';

describe('WeeklyPlannerComponent', () => {
  let component: WeeklyPlannerComponent;
  let fixture: ComponentFixture<WeeklyPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
