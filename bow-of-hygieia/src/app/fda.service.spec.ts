import { TestBed, inject } from '@angular/core/testing';

import { FdaService } from './fda.service';

describe('FdaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FdaService]
    });
  });

  it('should be created', inject([FdaService], (service: FdaService) => {
    expect(service).toBeTruthy();
  }));
});
