import { MenuFlatNode } from '../shared/MenuFlatNode.class';
import {
  Component,
  OnInit,
  Input,
  ContentChild,
  ContentChildren,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatTreeFlatDataSource } from '@angular/material/tree';
import {
  MenuNode
} from './ad-nav-menu.service';
import { AdNavItemDirective } from '../ad-nav-item/ad-nav-item.directive';
import { AdNavNesterDirective } from '../ad-nav-nester/ad-nav-nester.directive';
import { RouterLink } from '@angular/router';
import { CustomMatTreeControl } from '../shared/CustomMatTreeControl.class';

@Component({
  selector: 'ad-nav-menu',
  templateUrl: './ad-nav-menu.component.html',
  styleUrls: ['./ad-nav-menu.component.scss'],
})
export class AdNavMenuComponent implements OnInit {
  @ContentChild(AdNavNesterDirective, {static: true})  nesterTemplate;
  @ContentChild(AdNavItemDirective, {static: true})  menuItemTemplate;
  // menuControl = new AdNavMenuControl();
  @Input() dataSource: MatTreeFlatDataSource<MenuNode, MenuFlatNode>;
  @Input() treeControl: CustomMatTreeControl<MenuFlatNode>;
  menuData$: BehaviorSubject<MenuFlatNode[]> = new BehaviorSubject<MenuFlatNode[]>([]);

  constructor() {}

  @ContentChildren(RouterLink, {descendants: true}) linkRefs: RouterLink[];

  ngOnInit() {
    this.subscribeData();
  }

  subscribeData() {
    this.dataSource._flattenedData.subscribe(flatData => {
      // Material's FlatTreeControl does not have an emmiter to tell you when it's [dataNodes]
      // are updated so we have to do it this way to ensure FlatTreeControl has had a cycle to update
      setTimeout(() => {
        this.menuData$.next(flatData);
      });
    });

  }

  isMenuExpandable(_: number, _nodeData: MenuFlatNode) {
    return _nodeData.isExpandable;
  }
  isNodeSelected(menuNode: MenuFlatNode): boolean {
    return this.treeControl.expansionModel.isSelected(menuNode);
  }
}
