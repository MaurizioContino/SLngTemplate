import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutXsComponent } from './layout-xs.component';

describe('LayoutXsComponent', () => {
  let component: LayoutXsComponent;
  let fixture: ComponentFixture<LayoutXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutXsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
