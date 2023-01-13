import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbarsConfigComponent } from './hbars-config.component';

describe('HbarsConfigComponent', () => {
  let component: HbarsConfigComponent;
  let fixture: ComponentFixture<HbarsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HbarsConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HbarsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
