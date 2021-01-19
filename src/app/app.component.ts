import { AfterContentInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faDotCircle as defaultIcon, faChevronDown, faChevronLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { MenuFlatNode } from 'projects/ad-vertical-menu/src/lib/ad-nav/shared/MenuFlatNode.class';
import { AdMenuListRoutingService } from 'projects/ad-vertical-menu/src/lib/menu-list/menu-list-routing.service';
import { AdMenuControl } from 'projects/ad-vertical-menu/src/lib/ad-nav/shared/AdMenuControl.class';
import { MainMenu } from 'projects/ad-vertical-menu/src/lib/model/MainMenu.class';
import { filter} from 'rxjs/operators';
import { AdMainMenuService } from './main-menu/main-menu.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {

  @Output() closeMenu = new EventEmitter();

  currentNodeMatchedToRouter: MenuFlatNode;
  defaultIcon = defaultIcon;
  faChevronLeft = faChevronLeft;
  faChevronDown = faChevronDown;
  faCloseMenu = faTimesCircle;
  adMenuControl: AdMenuControl<MainMenu> = new AdMenuControl<MainMenu>();
  constructor(
    private menuRouting: AdMenuListRoutingService<MainMenu>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private adMainMenuService: AdMainMenuService
  ) {
    this.adMenuControl = this.adMainMenuService.adMenuControl;
  }
  ngOnInit() {
    this.adMenuControl.menuList$.subscribe((menuList) => {
      this.setCurrentNodeMatchedToRouter();
    });
  }

  setCurrentNodeMatchedToRouter() {
    this.currentNodeMatchedToRouter = this.menuRouting.getNodeMatchingRoute(this.router, this.adMenuControl);
  }

  ngAfterContentInit() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.setCurrentNodeMatchedToRouter();
    });
  }

  selectMainMenuItem(menuNode: MenuFlatNode) {
    console.log(menuNode, this.activatedRoute);
    //this.router.navigate([menuNode.route], {relativeTo: this.activatedRoute});
  }

}
