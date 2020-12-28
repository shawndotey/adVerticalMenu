import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdVerticalMenuComponent } from './ad-vertical-menu.component';

describe('AdVerticalMenuComponent', () => {
  let component: AdVerticalMenuComponent;
  let fixture: ComponentFixture<AdVerticalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdVerticalMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdVerticalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
