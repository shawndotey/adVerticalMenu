import { Component, ViewEncapsulation, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import {
  faDotCircle as defaultIcon,
  faChevronLeft,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { MenuFlatNode } from './ad-nav/shared/MenuFlatNode.class';
import { AdMenu } from './menu-list/model/AdMenu.class';
import { MainMenu } from './model/MainMenu.class';
import { ROUTE_NOT_SET } from './model/standard-values';

@Component({
  selector: 'ad-veritcal-menu',
  templateUrl: './ad-veritcal-menu.component.html',
  styleUrls: ['./ad-veritcal-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdVeritcalMenuComponent implements OnChanges {
  @Output() selectItem = new EventEmitter<MenuFlatNode>();
  @Input() currentNode: MenuFlatNode;
  @Input() adMenu: AdMenu<MainMenu>;

  constructor(
  ) {}

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
    this.adMenu.treeControl.expand(this.currentNode);
    this.adMenu.treeControl.expandParents(this.currentNode);
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
}
