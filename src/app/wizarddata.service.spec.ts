import { TestBed } from '@angular/core/testing';

import { WizarddataService } from './wizarddata.service';

describe('WizarddataService', () => {
  let service: WizarddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizarddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
