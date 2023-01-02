import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekResultsComponent } from './week-results.component';

describe('WeekResultsComponent', () => {
  let component: WeekResultsComponent;
  let fixture: ComponentFixture<WeekResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
