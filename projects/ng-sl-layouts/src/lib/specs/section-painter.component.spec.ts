import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPainterComponent } from '../section-painter/section-painter.component';

describe('SectionPainterComponent', () => {
  let component: SectionPainterComponent;
  let fixture: ComponentFixture<SectionPainterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPainterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
