import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekResultSmallComponent } from './week-result-small.component';

describe('WeekResultSmallComponent', () => {
  let component: WeekResultSmallComponent;
  let fixture: ComponentFixture<WeekResultSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekResultSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekResultSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
