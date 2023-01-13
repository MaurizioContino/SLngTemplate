import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDataSourceComponent } from './chart-data-source.component';

describe('ChartDataSourceComponent', () => {
  let component: ChartDataSourceComponent;
  let fixture: ComponentFixture<ChartDataSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartDataSourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartDataSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
