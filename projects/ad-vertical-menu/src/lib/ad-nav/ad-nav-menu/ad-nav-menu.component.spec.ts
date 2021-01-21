import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MainMenu } from '../../model/MainMenu.class';
import { AdMenuControl } from '../shared/AdMenuControl.class';

import { AdNavMenuComponent } from './ad-nav-menu.component';

describe('AdNavMenuComponent', () => {
  let component: AdNavMenuComponent;
  let fixture: ComponentFixture<AdNavMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdNavMenuComponent);
    component = fixture.componentInstance;
    const adMenuControl: AdMenuControl<MainMenu> = new AdMenuControl<MainMenu>();
    component.dataSource = adMenuControl.dataSource;
    component.treeControl = adMenuControl.treeControl;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
