import { TestBed } from '@angular/core/testing';

import { ParticipationEventsService } from './participation-events.service';

describe('ParticipationEventsService', () => {
  let service: ParticipationEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipationEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
