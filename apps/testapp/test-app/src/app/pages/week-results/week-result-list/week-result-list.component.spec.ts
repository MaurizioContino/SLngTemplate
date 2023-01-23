import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekResultListComponent } from './week-result-list.component';

describe('WeekResultListComponent', () => {
  let component: WeekResultListComponent;
  let fixture: ComponentFixture<WeekResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekResultListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
