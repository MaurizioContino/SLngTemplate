import { TestBed } from '@angular/core/testing';

import { NgSlDynamicchartsService } from './ng-sl-dynamiccharts.service';

describe('NgSlDynamicchartsService', () => {
  let service: NgSlDynamicchartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSlDynamicchartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
