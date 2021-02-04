import { TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AdVerticalMenuModule } from 'projects/ad-vertical-menu/src/public-api';
import { AdMainMenuModule } from './main-menu/main-menu.module';
import { AppRoutingModule } from './routing/routing.module';

const itemNamePrefix = 'mat-tree-node.ad-nav-menu-item-name-';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        BrowserModule,
        RouterTestingModule,
        AdVerticalMenuModule,
        AdMainMenuModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  // it(`should have as title 'ad-vertical-menu-workspace'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('ad-vertical-menu-workspace');
  // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.toolbar span').textContent).toContain('AngularDash Vertical Menu');
  });

  const homeItemSelector = `${itemNamePrefix}Home.ad-nav-menu-item-level-0`;

  it(`should contain 'Home' menu item at top level`, fakeAsync( () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    tick();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(homeItemSelector)).toBeTruthy() ;

  }));

  it(`'Home' menu item with badge containing the number 5`, waitForAsync( () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector(`${homeItemSelector} .mat-badge-content`).textContent).toContain('5');
    });
  }));

});
