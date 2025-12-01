import { TestBed } from '@angular/core/testing';

import { Ps3LoaderService } from './ps3-loader-service';

describe('Ps3LoaderService', () => {
  let service: Ps3LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ps3LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
