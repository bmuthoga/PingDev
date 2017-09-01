import { TestBed, inject } from '@angular/core/testing';

import { SearchDevsService } from './search-devs.service';

describe('SearchDevsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchDevsService]
    });
  });

  it('should be created', inject([SearchDevsService], (service: SearchDevsService) => {
    expect(service).toBeTruthy();
  }));
});
