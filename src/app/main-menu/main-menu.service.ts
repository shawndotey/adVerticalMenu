import { Injectable } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { AdMenuListBuilderService } from 'projects/ad-vertical-menu/src/lib/menu-list/menu-list-builder.service';
import { MainMenu } from 'projects/ad-vertical-menu/src/lib/model/dashboard-sidenav.MainMenu.model';

@Injectable({
  providedIn: 'root'
})
export class AdMainMenuService extends AdMenuListBuilderService<MainMenu> {
  constructor() {
    super();
  }
  buildMenu() {
    const rawMenuList = [
      {
        name: 'Home',
        icon: faHome,
        route: './home'
      }
    ];
    this.addMenu(this.mapMenuListToClass(rawMenuList, MainMenu));
  }
}
