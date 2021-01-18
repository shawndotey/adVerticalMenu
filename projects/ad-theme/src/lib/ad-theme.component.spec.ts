import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdThemeComponent } from './ad-theme.component';

describe('AdThemeComponent', () => {
  let component: AdThemeComponent;
  let fixture: ComponentFixture<AdThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
