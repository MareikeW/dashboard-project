import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Habit } from 'src/app/shared/habit.model';
import { HabitTrackerComponent } from './habit-tracker.component';


describe('HabitTrackerComponent', () => {
  let component: HabitTrackerComponent;
  let fixture: ComponentFixture<HabitTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitTrackerComponent ],
      imports: [FormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ id: 1 }) },
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onHabitSubmit', ()=> {
    it('resets the form', () => {
           const ngForm = {
        value: {},
        reset: () => {},
      } as NgForm;
      spyOn(ngForm, 'reset');
      component.onHabitSubmit(ngForm);
      expect(ngForm.reset).toHaveBeenCalledTimes(1)
    })
    it('resets the form', () => {
      component.week = 1
           const ngForm = {
        value: { habit: 'habit' },
        reset: () => {},
      } as NgForm;
      spyOn(ngForm, 'reset');
      component.onHabitSubmit(ngForm);
      expect(component.allHabits).toContain(new Habit(1, 'habit'))
    })
  })
});
