import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ADNotification } from './ADNotification.class';
import { IMainMenu } from './IMainMenu.interface';
import { MenuModel } from './MenuModel.class';

export class MainMenu extends MenuModel implements IMainMenu{
  route?: string;
  icon?: IconDefinition;
  children?: MainMenu[];
  badgeList$?: Observable<ADNotification[]>;
  badgeCount$?: Observable<string>;
  badgeValue:string = '';
  private _badgeCount$?: BehaviorSubject<string>;
  private badgeSubscription?:Subscription;
  constructor(init?: IMainMenu) {
    super(init as MainMenu);
    this.subscribeToBadgeAsNeeded();
  }
  subscribeToBadgeAsNeeded() {
    if (this.badgeList$) {
      this.subscribeToBadge();
    }
  }
  subscribeToBadge() {
    this._badgeCount$ = new BehaviorSubject<string>('');
    this.badgeSubscription =  this.badgeList$.subscribe(arrOfNotifications => {
      this.badgeValue = arrOfNotifications.length.toString();
      this._badgeCount$.next(this.badgeValue);
    });
    this.badgeCount$ = this._badgeCount$.asObservable();
  }
  unsubscribeFromBadgeAsNeeded() {
    if(this.badgeSubscription){
      this.badgeSubscription.unsubscribe();
    }
  }
}
