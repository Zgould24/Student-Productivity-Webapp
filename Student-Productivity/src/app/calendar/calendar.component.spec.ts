import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarComponent ]
    })
    .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Calendar'`, () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Calendar');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Calendar app is running!');
  });
});
// Here is the code you just replaced
//   beforeEach(() => {
//     fixture = TestBed.createComponent(CalendarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
