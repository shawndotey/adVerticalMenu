import { MenuModel } from "../ad-nav/ad-nav-menu/ad-nav-menu.service";
import { AdMenu } from "../menu-list/model/AdMenu.class";


export interface IAdMenuListService<MenuType extends MenuModel> {
 adMenu: AdMenu<MenuType>;
 buildMenu();
}
