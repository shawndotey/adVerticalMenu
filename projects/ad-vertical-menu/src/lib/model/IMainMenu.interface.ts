import { Observable } from 'rxjs';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ADNotification } from './ADNotification.class';
import { MainMenu } from './MainMenu.class';

export interface IMainMenu {
  name?: string;
  route?: string;
  icon?: IconDefinition;
  children?: MainMenu[];
  badgeList$?: Observable<ADNotification[]>;
}
