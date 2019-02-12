import { TestBed } from '@angular/core/testing';

import { FromFormatsService } from './from-formats.service';

describe('FromFormatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FromFormatsService = TestBed.get(FromFormatsService);
    expect(service).toBeTruthy();
  });
});
