import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastVsPrevValueComponent } from './last-vs-prev-value.component';

describe('LastVsPrevValueComponent', () => {
  let component: LastVsPrevValueComponent;
  let fixture: ComponentFixture<LastVsPrevValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastVsPrevValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastVsPrevValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
