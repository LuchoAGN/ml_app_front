import { TestBed } from '@angular/core/testing';

import { AnalyseTextService } from './analyse-text.service';

describe('AnalyseTextService', () => {
  let service: AnalyseTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyseTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
