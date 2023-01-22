import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekResultDetailsComponent } from './week-result-details.component';

describe('WeekResultDetailsComponent', () => {
  let component: WeekResultDetailsComponent;
  let fixture: ComponentFixture<WeekResultDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekResultDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
