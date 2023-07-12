import { TestBed } from '@angular/core/testing';

import { LotesalienteService } from './lotesaliente.service';

describe('LotesalienteService', () => {
  let service: LotesalienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotesalienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
