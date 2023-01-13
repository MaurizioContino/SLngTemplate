import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HradialComponent } from './hradial.component';

describe('HradialComponent', () => {
  let component: HradialComponent;
  let fixture: ComponentFixture<HradialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HradialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HradialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
