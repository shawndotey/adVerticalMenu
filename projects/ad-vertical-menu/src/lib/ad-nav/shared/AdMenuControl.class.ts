import { BehaviorSubject, Observable } from 'rxjs';
import { MatTreeFlatDataSource } from '@angular/material/tree';
import { AdNavMenuTreeService, MenuFlatNode, MenuModel, MenuNode } from '../ad-nav-menu/ad-nav-menu.service';
import { CustomMatTreeControl } from './CustomMatTreeControl.class';
export class AdMenuControl<MenuType extends MenuModel> {
  constructor() {
    this._menuList$ = new BehaviorSubject<MenuType[]>([]);
    this.menuList$ = this._menuList$.asObservable();
    this.buildAdMenu();
    this.buildAdMenuData();
  }

  protected navMenuTreeService: AdNavMenuTreeService = new AdNavMenuTreeService();
  private _menuList: MenuType[] = [];
  get menuList(): MenuType[] {
    return this._menuList;
  }
  private resolveMenuList() {
    if ( this.isMenuListValid() || this._menuList.length === 0) {
         throw Error('Must define property [menuList] in the [buildMenu()] method');
    }
  }
  set menuList(menuList: MenuType[]) {
    this._menuList = menuList;
    this._menuList.sort(((a, b) => a.order < b.order ? -1 : a.order > b.order ? 1 : 0));
    this.menuListUpdateEvent();
  }
  private isMenuListValid() {
    return (!(this._menuList instanceof Array ));
  }
  treeControl: CustomMatTreeControl<MenuFlatNode>;
  dataSource: MatTreeFlatDataSource<MenuNode, MenuFlatNode>;
  private _menuList$ = new BehaviorSubject<MenuType[]>([]);
  menuList$: Observable<MenuType[]> = this._menuList$.asObservable();
  buildAdMenu() {
    this.treeControl = this.navMenuTreeService.buildTreeControl();
    this.dataSource = this.navMenuTreeService.buildDataSource(this.treeControl);
  }
  menuListUpdateEvent() {
    this.buildAdMenuData();
    this._menuList$.next(this._menuList);
  }
  buildAdMenuData() {
    const data: MenuNode[] = this.navMenuTreeService.buildMenuTree(this.menuList);
    this.dataSource.data = data;
  }
  addMenu(menuList: MenuType[]) {
    if (!this._menuList) {
      this._menuList = [];
    }
    this._menuList = this._menuList.concat(menuList);
    this.menuList = this._menuList;
  }
}
