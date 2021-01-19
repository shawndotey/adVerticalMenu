import { FlatTreeControl } from '@angular/cdk/tree';
import { Injectable } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Observable, of as observableOf } from 'rxjs';
import { MenuFlatNode } from '../shared/MenuFlatNode.class';
import { MenuNode } from '../shared/MenuNode.class';
import { CustomMatTreeControl } from '../shared/CustomMatTreeControl.class';
import { MenuModel } from '../../menu-list/model/MenuModel.class';
export { MenuNode, MenuFlatNode, MenuModel };

@Injectable({
  providedIn: 'root'
})
export class AdNavMenuTreeService {
  treeFlattener: MatTreeFlattener<MenuNode, MenuFlatNode>;
  constructor() {
    this.initialize();
  }
  initialize() {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
  }
  transformer = (node: MenuNode, level: number) => {
    const flatNode = new MenuFlatNode();
    Object.assign(flatNode, node);
    flatNode.level = level;
    flatNode.isExpandable = (node.children.length !== 0);
    return flatNode;
  }
  private _getLevel = (node: MenuFlatNode) => node.level;

  private _isExpandable(node: MenuFlatNode) {
    return node.isExpandable;
  }

  private _getChildren(node: MenuNode): Observable<MenuNode[]> {
    return observableOf(node.children);
  }
  buildMenuTree(menuList: Partial<MenuModel>[]): MenuNode[] {
    return menuList.map(menuPartial => this.buildMenuNode(new MenuNode(menuPartial)));
  }
  buildMenuNode(builtMenuNode: MenuNode, level: number = 0): MenuNode {

    builtMenuNode.level = level;
    builtMenuNode.children.forEach(childNode => this.buildMenuNode(childNode, level + 1)) ;
    return builtMenuNode;
  }
  buildTreeControl(): CustomMatTreeControl<MenuFlatNode> {

    return  new CustomMatTreeControl<MenuFlatNode>(this._getLevel, this._isExpandable);

  }
  buildDataSource(treeControl: FlatTreeControl<MenuFlatNode>): MatTreeFlatDataSource<MenuNode, MenuFlatNode> {

    return new MatTreeFlatDataSource(treeControl, this.treeFlattener);
  }
}


