import { Observable, BehaviorSubject } from 'rxjs';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ADNotification } from './ADNotification.class';
import { IMainMenu } from './IMainMenu.interface';
import { MenuModel } from './MenuModel.class';

export class MainMenu extends MenuModel implements IMainMenu{
  constructor(init?: IMainMenu) {//Partial<MenuModel>
    super(init as MainMenu);
    if (this.badge) {
      this.subscribeToBadge();
    }
  }
  route?: string;
  icon?: IconDefinition;
  children?: MainMenu[];
  badge?: Observable<ADNotification[]>;
  private _badgeValue?: BehaviorSubject<string>;
  badgeValue?: Observable<string>;
  subscribeToBadge() {
    this._badgeValue = new BehaviorSubject<string>('');
    this.badge.subscribe(arrOfNotifications => {
      this._badgeValue.next(arrOfNotifications.length.toString());
    });
    this.badgeValue = this._badgeValue.asObservable();
  }

}
