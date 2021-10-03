import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoalsService } from 'src/app/shared/goals.service';
import { GoalsDisplayComponent } from './goals-display.component';

describe('GoalsDisplayComponent', () => {
  let component: GoalsDisplayComponent;
  let goalsService: GoalsService;
  let fixture: ComponentFixture<GoalsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoalsDisplayComponent],
    }).compileComponents();
    goalsService = TestBed.inject<GoalsService>(GoalsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('changeDateFormat', () => {
    it('returns day.month.year if date exists', () => {
      const date = '2021-10-8';
      expect(component.changeDateFormat(date)).toBe('8.10.2021');
    });
  });

  describe('markGoalAsFinished', () => {
    it('calls markGoalAsFinished', () => {
      spyOn(goalsService, 'markAsAccomplished');
      const index = 1;
      component.markGoalAsFinished(index);
      expect(goalsService.markAsAccomplished).toHaveBeenCalledWith(index);
    });
  });

  describe('removeGoal', () => {
    it('calls deleteGoal from service', () => {
      spyOn(goalsService, 'deleteGoal');
      const index = 1;
      component.removeGoal(index);
      expect(goalsService.deleteGoal).toHaveBeenCalledWith(index);
    });
  });
});
