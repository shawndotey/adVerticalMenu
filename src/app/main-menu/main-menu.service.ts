import { Injectable } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { AdMenuListBuilderService } from 'projects/ad-vertical-menu/src/lib/menu-list/menu-list-builder.service';
import { MainMenu } from 'projects/ad-vertical-menu/src/lib/model/MainMenu.class';

@Injectable({
  providedIn: 'root'
})
export class AdMainMenuService {
  constructor(private adMenuListBuilderService: AdMenuListBuilderService<MainMenu>) {
  }
  buildMenu() {
    const rawMenuList = [
      new MainMenu({
        name: 'Home',
        icon: faHome,
        route: './home'
      } )
    ];
    this.adMenuListBuilderService.addMenu(rawMenuList);
  }
}
