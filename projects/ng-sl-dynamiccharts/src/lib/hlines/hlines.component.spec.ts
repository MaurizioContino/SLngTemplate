import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlinesComponent } from './hlines.component';

describe('HlinesComponent', () => {
  let component: HlinesComponent;
  let fixture: ComponentFixture<HlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
