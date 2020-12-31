import { Observable } from 'rxjs';
import { AdSlotItemComponent } from './model/ad-slot-item-component.interface';
import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy, Input } from '@angular/core';
import { AdSlotItem } from './model/ad-slot-item';
import { AdAnchorDirective } from './ad-anchor.directive';


@Component({
  selector: 'ad-slot',
  templateUrl: './ad-slot.component.html',
  styleUrls: ['./ad-slot.component.scss']
})
export class AdSlotComponent implements OnInit, OnDestroy {

  @Input() public slotItems$: Observable<AdSlotItem[]>;
  @ViewChild(AdAnchorDirective, {static: true}) adHost: AdAnchorDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.slotItems$.subscribe(items => {
      this.loadComponents(items);
    });
  }

  ngOnDestroy() {

  }

  loadComponents(slotItems: AdSlotItem[]) {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    if (!slotItems || !slotItems.length) {
      return;
    }

    slotItems.forEach((slotItem) => {

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(slotItem.component);
      const componentRef = viewContainerRef.createComponent(componentFactory);
      ( componentRef.instance as AdSlotItemComponent).data = slotItem.data;

    });

  }



}
