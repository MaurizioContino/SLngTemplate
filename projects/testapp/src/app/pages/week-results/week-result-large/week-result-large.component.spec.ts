import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekResultLargeComponent } from './week-result-large.component';

describe('WeekResultLargeComponent', () => {
  let component: WeekResultLargeComponent;
  let fixture: ComponentFixture<WeekResultLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekResultLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekResultLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
