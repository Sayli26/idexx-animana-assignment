import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { IPatient } from 'src/app/models/patient';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiService<IPatient> = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
