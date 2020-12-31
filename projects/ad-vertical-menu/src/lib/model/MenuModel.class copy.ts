
export class MenuModel {
  constructor(init?: Partial<MenuModel>) {
    Object.assign(this, init);
  }
  name: string;
  children?: MenuModel[];
  order = 0;

}
