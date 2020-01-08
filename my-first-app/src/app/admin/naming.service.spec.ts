import { TestBed } from '@angular/core/testing';

import { NamingService } from './naming.service';

describe('NamingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NamingService = TestBed.get(NamingService);
    expect(service).toBeTruthy();
  });
});
