import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adAnchor]'
})
export class AdAnchorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
