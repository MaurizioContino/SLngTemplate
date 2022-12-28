import { TestBed } from '@angular/core/testing';

import { NgSlMenuService } from './ng-sl-menu.service';

describe('NgSlMenuService', () => {
  let service: NgSlMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSlMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
