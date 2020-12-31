import { TestBed, inject } from '@angular/core/testing';

import { AdNavMenuTreeService } from './ad-nav-menu.service';

describe('AdDashboardSidenavMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdNavMenuTreeService]
    });
  });

  it('should be created', inject([AdNavMenuTreeService], (service: AdNavMenuTreeService) => {
    expect(service).toBeTruthy();
  }));
});
