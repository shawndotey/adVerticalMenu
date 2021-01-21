import { Component, ViewEncapsulation, Input, EventEmitter, Output, OnChanges, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import {
  faDotCircle as defaultIcon,
  faChevronLeft,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { MenuFlatNode } from './ad-nav/shared/MenuFlatNode.class';
import { AdMenuControl } from './ad-nav/shared/AdMenuControl.class';
import { MainMenu } from './model/MainMenu.class';
import { ROUTE_NOT_SET } from './model/standard-values';

@Component({
  selector: 'ad-veritcal-menu',
  templateUrl: './ad-veritcal-menu.component.html',
  styleUrls: ['./ad-veritcal-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdVeritcalMenuComponent implements OnChanges, OnDestroy {
  @Output() selectItem = new EventEmitter<MenuFlatNode>();
  @Input() currentNode: MenuFlatNode;
  @Input() adMenuControl: AdMenuControl<MainMenu>;

  constructor() {}

  defaultIcon = defaultIcon;
  faChevronLeft = faChevronLeft;
  faChevronDown = faChevronDown;

  ngOnChanges() {
    if (!this.currentNode ) {
      return;
    }
    this.expandCurrentNode();
  }
  expandCurrentNode() {
    this.adMenuControl.treeControl.expand(this.currentNode);
    this.adMenuControl.treeControl.expandParents(this.currentNode);
  }
  navItemSelected(menuNode: MenuFlatNode) {
    this.selectItem.emit(menuNode);
  }
  isRouteValid(route: string) {
    return !route.includes(ROUTE_NOT_SET);
  }
  isNodeSelected(menuNode: MenuFlatNode) {
    return (menuNode === this.currentNode);
  }
  isBadgeDisplayable(menuNode: MainMenu){
    if(menuNode.badgeValue && menuNode.badgeValue !== '0'){
      return true;
    }
    return false;
  }
  ngOnDestroy(){
    this.adMenuControl.menuList.forEach(menuItem=>{
      menuItem.unsubscribeFromBadgeAsNeeded();
    })
  }
}
