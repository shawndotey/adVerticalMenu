import { Observable, BehaviorSubject } from 'rxjs';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ADNotification } from './ADNotification.class';
import { MenuModel } from '../menu-list/model/MenuModel.class';

export class MainMenu extends MenuModel {
  constructor(init?: Partial<MenuModel>) {
    super(init);
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
