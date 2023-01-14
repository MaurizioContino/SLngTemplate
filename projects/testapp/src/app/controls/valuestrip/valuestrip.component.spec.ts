import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuestripComponent } from './valuestrip.component';

describe('ValuestripComponent', () => {
  let component: ValuestripComponent;
  let fixture: ComponentFixture<ValuestripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuestripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuestripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
