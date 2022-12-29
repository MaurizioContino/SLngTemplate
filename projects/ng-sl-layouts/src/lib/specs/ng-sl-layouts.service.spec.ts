import { TestBed } from '@angular/core/testing';

import { NgSlLayoutsService } from './ng-sl-layouts.service';

describe('NgSlLayoutsService', () => {
  let service: NgSlLayoutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSlLayoutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
