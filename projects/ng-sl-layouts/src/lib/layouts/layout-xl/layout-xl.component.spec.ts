import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutXLComponent } from './layout-xl.component';

describe('LayoutXLComponent', () => {
  let component: LayoutXLComponent;
  let fixture: ComponentFixture<LayoutXLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutXLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutXLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
