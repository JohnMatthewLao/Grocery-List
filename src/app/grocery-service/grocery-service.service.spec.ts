import { TestBed } from '@angular/core/testing';

import { GroceryService } from './grocery-service.service';

describe('GroceryServiceService', () => {
  let service: GroceryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
