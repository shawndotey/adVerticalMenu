import { AfterContentInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faDotCircle as defaultIcon, faChevronDown, faChevronLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { MenuFlatNode } from 'projects/ad-vertical-menu/src/lib/ad-nav/shared/MenuFlatNode.class';
import { AdMenuListRoutingService } from 'projects/ad-vertical-menu/src/lib/menu-list/menu-list-routing.service';
import { AdMenuControl } from 'projects/ad-vertical-menu/src/lib/ad-nav/shared/AdMenuControl.class';
import { MainMenu } from 'projects/ad-vertical-menu/src/lib/model/MainMenu.class';
import { filter} from 'rxjs/operators';
import { AdMainMenuService } from './main-menu/main-menu.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit, OnDestroy {

  @Output() closeMenu = new EventEmitter();

  currentNodeMatchedToRouter: MenuFlatNode;
  adMenuControl: AdMenuControl<MainMenu> = new AdMenuControl<MainMenu>();
  private _subscriptions: Subscription[] = [];
  constructor(
    private menuRouting: AdMenuListRoutingService<MainMenu>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private adMainMenuService: AdMainMenuService
  ) {
    this.adMenuControl = this.adMainMenuService.adMenuControl;
  }
  ngOnInit() {
    const subscription = this.adMenuControl.menuList$.subscribe((menuList) => {
      this.setCurrentNodeMatchedToRouter();
    });
    this._subscriptions.push(subscription);
  }

  setCurrentNodeMatchedToRouter() {
    this.currentNodeMatchedToRouter = this.menuRouting.getNodeMatchingRoute(this.router, this.adMenuControl);
  }

  ngAfterContentInit() {
    const subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setCurrentNodeMatchedToRouter();
    });
    this._subscriptions.push(subscription);
  }

  selectMainMenuItem(menuNode: MenuFlatNode) {
    console.log(menuNode, this.activatedRoute);
    //this.router.navigate([menuNode.route], {relativeTo: this.activatedRoute});
  }
  ngOnDestroy(){
    this._subscriptions.forEach(subscription =>{
      subscription.unsubscribe();
    });
  }

}
