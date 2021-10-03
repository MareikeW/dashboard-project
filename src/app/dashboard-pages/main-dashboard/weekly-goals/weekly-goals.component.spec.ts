import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { WeekGoal } from 'src/app/shared/weekgoal.model';
import { WeeklyGoalsComponent } from './weekly-goals.component';

describe('WeeklyGoalsComponent', () => {
  let component: WeeklyGoalsComponent;
  let fixture: ComponentFixture<WeeklyGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeeklyGoalsComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ id: 1 }) },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyGoalsComponent);
    component = fixture.componentInstance;
    localStorage.clear()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onWeekGoalSubmit', () => {
    it('resets the form', () => {
      const week = 5;
      component.week = week;
      const ngForm = {
        value: { weekGoal: undefined },
        reset: () => {},
      } as NgForm;
      spyOn(ngForm, 'reset');
      component.onWeekGoalSubmit(ngForm);
      expect(ngForm.reset).toHaveBeenCalledTimes(1);
    });

    it('does not change all week goals if new goal is undefined', () => {
      const week = 5;
      component.week = week;
      const ngForm = {
        value: { weekGoal: undefined },
        reset: () => {},
      } as NgForm;
      component.onWeekGoalSubmit(ngForm);
      expect(component.currentWeeksGoals).toEqual([]);
    });

    it('adds new goal if defined', () => {
      const week = 5;
      component.week = week;
      const weekGoal = new WeekGoal( 'desc', week);
      const ngForm = {
        value: { weekGoal: weekGoal.description },
        reset: () => {},
      } as NgForm;
      component.onWeekGoalSubmit(ngForm);
      expect(component.currentWeeksGoals).toContain(weekGoal);
    });

    it('updates local storage with the new goal', () => {
      const week = 5;
      component.week = week;
      const weekGoal = new WeekGoal( 'desc', week);
      const ngForm = {
        value: { weekGoal: weekGoal.description },
        reset: () => {},
      } as NgForm;
      component.onWeekGoalSubmit(ngForm);
      expect(localStorage.getItem('weekgoals')).toBe(JSON.stringify([weekGoal]));
    });
  });
});
