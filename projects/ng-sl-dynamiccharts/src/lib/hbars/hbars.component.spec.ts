import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HBarsComponent } from './hbars.component';

describe('HBarsComponent', () => {
  let component: HBarsComponent;
  let fixture: ComponentFixture<HBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
