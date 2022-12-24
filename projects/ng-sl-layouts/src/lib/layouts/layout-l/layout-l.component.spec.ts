import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLComponent } from './layout-l.component';

describe('LayoutLComponent', () => {
  let component: LayoutLComponent;
  let fixture: ComponentFixture<LayoutLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
