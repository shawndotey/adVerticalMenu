import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { faBicycle, faBiking, faBus, faCar, faGlobe, faHome, faMap, faSitemap, faWalking } from '@fortawesome/free-solid-svg-icons';
import { AdMenuControl } from 'projects/ad-vertical-menu/src/lib/ad-nav/shared/AdMenuControl.class';
import { ADNotification } from 'projects/ad-vertical-menu/src/lib/model/ADNotification.class';
import { MainMenu } from 'projects/ad-vertical-menu/src/lib/model/MainMenu.class';

@Injectable({
  providedIn: 'root'
})
export class AdMainMenuService {
  adMenuControl: AdMenuControl<MainMenu> = new AdMenuControl<MainMenu>();
  constructor() {
    this.buildMenu();
  }
  buildMenu() {
    const mockNotifications = [];
    for (let i = 0; i < 5; i++){
      mockNotifications.push(new ADNotification())
    }
    const homeNotificationList = new BehaviorSubject<ADNotification[]>(mockNotifications);
    const menuList = [
      new MainMenu({
        name: 'Home',
        icon: faHome,
        route: './home',
        badgeList$: homeNotificationList
      }),
      new MainMenu({
        name: 'Transportation',
        icon: faGlobe,
        route: './home',
        children:[
          new MainMenu({
            name: 'Personal',
            icon: faCar,
            route: './home'
          }),
          new MainMenu({
            name: 'Walking',
            icon: faWalking,
            route: './home'
          }),
          new MainMenu({
            name: 'Public',
            icon: faBus,
            route: './home'
          }),
          new MainMenu({
            name: 'Public',
            icon: faBiking,
            route: './home'
          })
        ]
      })
    ];
    this.adMenuControl.addMenu(menuList);
  }
}
