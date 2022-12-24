import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSComponent } from './layout-s.component';

describe('LayoutSComponent', () => {
  let component: LayoutSComponent;
  let fixture: ComponentFixture<LayoutSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
