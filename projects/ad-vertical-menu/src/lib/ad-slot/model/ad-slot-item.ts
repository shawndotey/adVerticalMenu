import { Type } from '@angular/core';
export class AdSlotItem {
  constructor(init: AdSlotItem) {
    Object.assign(this, init);
  }
  component: Type<any>;
  data: any;
}
