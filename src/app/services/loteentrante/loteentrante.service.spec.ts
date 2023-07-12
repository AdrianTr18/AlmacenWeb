import { TestBed } from '@angular/core/testing';

import { LoteentranteService } from './loteentrante.service';

describe('LoteentranteService', () => {
  let service: LoteentranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoteentranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
