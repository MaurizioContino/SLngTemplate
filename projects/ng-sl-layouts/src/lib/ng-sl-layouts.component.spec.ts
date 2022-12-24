import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSlLayoutsComponent } from './ng-sl-layouts.component';

describe('NgSlLayoutsComponent', () => {
  let component: NgSlLayoutsComponent;
  let fixture: ComponentFixture<NgSlLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSlLayoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSlLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
