import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChartHBarComponent } from './dashboard-chart-hbar.component';

describe('DashboardChartHBarComponent', () => {
  let component: DashboardChartHBarComponent;
  let fixture: ComponentFixture<DashboardChartHBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardChartHBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardChartHBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
