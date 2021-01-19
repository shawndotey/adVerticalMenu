import { AfterContentInit, Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faDotCircle as defaultIcon, faChevronDown, faChevronLeft, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { MenuFlatNode } from 'projects/ad-vertical-menu/src/lib/ad-nav/shared/MenuFlatNode.class';
import { AdMenuListBuilderService } from 'projects/ad-vertical-menu/src/lib/menu-list/menu-list-builder.service';
import { AdMenuListRoutingService } from 'projects/ad-vertical-menu/src/lib/menu-list/menu-list-routing.service';
import { AdMenu } from 'projects/ad-vertical-menu/src/lib/menu-list/model/AdMenu.class';
import { MainMenu } from 'projects/ad-vertical-menu/src/lib/model/MainMenu.class';
import { filter} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit, AfterContentInit {

  @Output() closeMenu = new EventEmitter();
  adMenu: AdMenu<MainMenu> = new AdMenu<MainMenu>();
  currentNodeMatchedToRouter: MenuFlatNode;
  defaultIcon = defaultIcon;
  faChevronLeft = faChevronLeft;
  faChevronDown = faChevronDown;
  faCloseMenu = faTimesCircle;

  constructor(
    private menuBuilderService: AdMenuListBuilderService<MainMenu>,
    private menuRouting: AdMenuListRoutingService<MainMenu>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.adMenu = this.menuBuilderService.adMenu;
  }
  ngOnInit() {
    this.adMenu.menuList$.subscribe((menuList) => {
      this.setCurrentNodeMatchedToRouter();
    });
  }


  setCurrentNodeMatchedToRouter() {
    this.currentNodeMatchedToRouter = this.menuRouting.getNodeMatchingRoute(this.router, this.adMenu);
  }

  ngAfterContentInit() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.setCurrentNodeMatchedToRouter();
    });
  }

  selectMainMenuItem(menuNode: MenuFlatNode) {
    this.router.navigate([menuNode.route], {relativeTo: this.activatedRoute});
  }

}
