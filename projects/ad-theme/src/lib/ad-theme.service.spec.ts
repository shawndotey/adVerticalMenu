import { TestBed } from '@angular/core/testing';

import { AdThemeService } from './ad-theme.service';

describe('AdThemeService', () => {
  let service: AdThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
