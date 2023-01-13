import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HgaugeComponent } from './hgauge.component';

describe('HgaugeComponent', () => {
  let component: HgaugeComponent;
  let fixture: ComponentFixture<HgaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HgaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HgaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
