import { TestBed } from '@angular/core/testing';

import { PiesService } from './pies.service';

describe('PiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PiesService = TestBed.get(PiesService);
    expect(service).toBeTruthy();
  });
});
