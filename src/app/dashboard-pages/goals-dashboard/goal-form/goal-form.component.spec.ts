import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { GoalsService } from 'src/app/shared/goals.service';
import { GoalFormComponent } from './goal-form.component';

describe('GoalFormComponent', () => {
  let component: GoalFormComponent;
  let goalsService: GoalsService;
  let fixture: ComponentFixture<GoalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalFormComponent],
      imports: [FormsModule],
    }).compileComponents();
    goalsService = TestBed.inject<GoalsService>(GoalsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onFormSubmit', () => {
    it('does not reset form if name does not exist', () => {
      const ngForm = {
        value: { name: undefined },
        reset: () => {},
      } as NgForm;
      spyOn(ngForm, 'reset');
      component.onFormSubmit(ngForm);
      expect(ngForm.reset).not.toHaveBeenCalled();
    })

    it('resets the form if name exists', () => {
      const ngForm = {
        value: { name: 'name' },
        reset: () => {},
      } as NgForm;
      spyOn(ngForm, 'reset');
      component.onFormSubmit(ngForm);
      expect(ngForm.reset).toHaveBeenCalledTimes(1);
    });

    it('does not call addGoal from service if name does not exist', () => {
      spyOn(goalsService, 'addGoal');
      const ngForm = {
        value: { name: undefined },
        reset: () => {},
      } as NgForm;
      component.onFormSubmit(ngForm);
      expect(goalsService.addGoal).not.toHaveBeenCalled();
    });

    it('calls addGoal from service if name exists', () => {
      spyOn(goalsService, 'addGoal');
      const ngForm = {
        value: { name: 'name' },
        reset: () => {},
      } as NgForm;
      component.onFormSubmit(ngForm);
      expect(goalsService.addGoal).toHaveBeenCalledTimes(1);
    });
  });
});
