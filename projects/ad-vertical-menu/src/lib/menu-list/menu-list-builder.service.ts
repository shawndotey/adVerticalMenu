import { MenuModel } from "./model/MenuModel.class";
import { AdMenu } from "./model/AdMenu.class";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AdMenuListBuilderService<MenuType extends MenuModel> {
  adMenu: AdMenu<MenuType> = new AdMenu<MenuType>();
  private _menuList: MenuType[] = null;
  get menuList(): MenuType[] {
    this.resolveMenuList();
    return this._menuList;
  }
  constructor(
    ) {
  }
  private resolveMenuList() {
    if ( this.isMenuListValid() || this._menuList.length === 0) {
         throw Error('Must define property [menuList] in the [buildMenu()] method');
    }
  }
  private isMenuListValid() {
    return (!(this._menuList instanceof Array ));
  }
  addMenu(menuList: MenuType[]) {
    if (!this._menuList) {
      this._menuList = [];
    }
    this._menuList = this._menuList.concat(menuList);
    this.adMenu.menuList = this._menuList;
  }
  public mapMenuListToClass(menuList: any[], MenuConstructor): MenuType[] {
    return menuList.map<MenuType>(menuItem => {
      if (menuItem.children && menuItem.children.length) {
        menuItem.children = this.mapMenuListToClass(menuItem.children as MenuType[], MenuConstructor);
      }
      const activatedItem: MenuType = new MenuConstructor(menuItem);
      return activatedItem;
    });
  }


}
