import { TestBed } from '@angular/core/testing';

import { AdVerticalMenuService } from './ad-vertical-menu.service';

describe('AdVerticalMenuService', () => {
  let service: AdVerticalMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdVerticalMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
