import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MainDashboardComponent } from './main-dashboard.component';

describe('MainDashboardComponent', () => {
  let component: MainDashboardComponent;
  let fixture: ComponentFixture<MainDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainDashboardComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { data: of({ id: 1 }) },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getNextWeek', () => {
    it('sets nextWeek to undefined if week > 11', () => {
      const nextWeek = '/dashboard/main-dashboard/11';
      component.nextWeek = nextWeek;
      component.week = 12;
      expect(component.getNextWeek()).toBeUndefined();
    });

    it('increases nextWeek if week < 11', () => {
      const nextWeek = '/dashboard/main-dashboard/1';
      component.nextWeek = nextWeek;
      component.week = 2;
      expect(component.getNextWeek()).toBe('/dashboard/main-dashboard/3');
    });

    it('increases nextWeek if week = 11', () => {
      const nextWeek = '/dashboard/main-dashboard/1';
      component.nextWeek = nextWeek;
      component.week = 11;
      expect(component.getNextWeek()).toBe('/dashboard/main-dashboard/12');
    });
  });

  describe('getPreviousWeek', () => {
    it('sets nextWeek to undefined if week < 2', () => {
      const nextWeek = '/dashboard/main-dashboard/11';
      component.nextWeek = nextWeek;
      component.week = 1;
      expect(component.getPreviousWeek()).toBeUndefined();
    });

    it('decreases nextWeek if week > 2', () => {
      const nextWeek = '/dashboard/main-dashboard/1';
      component.nextWeek = nextWeek;
      component.week = 3;
      expect(component.getPreviousWeek()).toBe('/dashboard/main-dashboard/2');
    });

    it('decreases nextWeek if week = 2', () => {
      const nextWeek = '/dashboard/main-dashboard/1';
      component.nextWeek = nextWeek;
      component.week = 2;
      expect(component.getPreviousWeek()).toBe('/dashboard/main-dashboard/1');
    });
  });

  describe('hasNextWeek', () => {
    it('returns true if week < 11', () => {
      component.week = 10
      expect(component.hasNextWeek()).toBe(true)
    })

    it('returns true if week = 11', () => {
      component.week = 11
      expect(component.hasNextWeek()).toBe(true)
    })

    it('returns false if week > 11', () => {
      component.week = 12
      expect(component.hasNextWeek()).toBe(false)
    })
  })

  describe('hasPreviousWeek', () => {
    it('returns true if week > 2', () => {
      component.week = 3
      expect(component.hasPreviousWeek()).toBe(true)
    })

    it('returns true if week = 2', () => {
      component.week = 2
      expect(component.hasPreviousWeek()).toBe(true)
    })

    it('returns false if week < 2', () => {
      component.week = 1
      expect(component.hasPreviousWeek()).toBe(false)
    })
  })
});
