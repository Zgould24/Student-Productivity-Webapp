import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerItselfComponent } from './timer-itself.component';

describe('TimerItselfComponent', () => {
  let component: TimerItselfComponent;
  let fixture: ComponentFixture<TimerItselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerItselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerItselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
