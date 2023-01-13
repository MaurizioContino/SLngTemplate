import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSlDynamicchartsComponent } from './ng-sl-dynamiccharts.component';

describe('NgSlDynamicchartsComponent', () => {
  let component: NgSlDynamicchartsComponent;
  let fixture: ComponentFixture<NgSlDynamicchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSlDynamicchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSlDynamicchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
