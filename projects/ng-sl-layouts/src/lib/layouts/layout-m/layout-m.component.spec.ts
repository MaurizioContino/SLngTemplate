import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMComponent } from './layout-m.component';

describe('LayoutMComponent', () => {
  let component: LayoutMComponent;
  let fixture: ComponentFixture<LayoutMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
