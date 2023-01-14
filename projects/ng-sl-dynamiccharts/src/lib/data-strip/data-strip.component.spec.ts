import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStripComponent } from './data-strip.component';

describe('DataStripComponent', () => {
  let component: DataStripComponent;
  let fixture: ComponentFixture<DataStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataStripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
