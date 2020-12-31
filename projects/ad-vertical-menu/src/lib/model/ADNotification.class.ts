import { NotificationType } from './NotificationType.enum';
export class ADNotification {
  public constructor(init?: ADNotification) {
    if (init) {
      // Object.assign(this, init);
    }
  }
  type: NotificationType = NotificationType.General;
  notificationMessage = 'You have a new notification';
  notificationDetails = '';
  isNotificationRead = false;
}
