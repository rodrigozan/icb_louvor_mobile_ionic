import { TestBed } from '@angular/core/testing';

import { WorshipScheduleService } from './worship-schedule.service';

describe('WorshipScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorshipScheduleService = TestBed.get(WorshipScheduleService);
    expect(service).toBeTruthy();
  });
});
