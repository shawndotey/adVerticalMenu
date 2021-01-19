import { MenuModel } from '../../model/MenuModel.class';
import { ROUTE_NOT_SET } from '../../model/standard-values';

export class MenuFlatNode extends MenuModel {
  level: number;
  isExpandable: boolean;
  route: string = ROUTE_NOT_SET;
  constructor(init?: Partial<MenuFlatNode> | Partial<MenuModel>) {
    super();
    Object.assign(this, init);
  }
}
