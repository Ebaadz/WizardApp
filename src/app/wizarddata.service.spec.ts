import { TestBed } from '@angular/core/testing';
import { wizarddata } from './wizarddata.service';

describe('wizarddata', () => {
  let service: wizarddata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(wizarddata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
