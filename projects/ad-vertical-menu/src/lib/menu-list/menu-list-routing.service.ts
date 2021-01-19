import { Injectable } from '@angular/core';
import { UrlTree, Router } from '@angular/router';
import { MenuFlatNode } from '../ad-nav/shared/MenuFlatNode.class';
import { MenuModel } from '../model/MenuModel.class';
import { AdMenuControl } from '../ad-nav/shared/AdMenuControl.class';
@Injectable({
  providedIn: 'root'
})
export class AdMenuListRoutingService<ListType> {
  /// Route methods
  getNodeMatchingRoute(router: Router, adMenu: AdMenuControl<MenuModel>) {
    return adMenu.treeControl.dataNodes.filter(node => this.doesNodeMatchRoute(node, router))[0];
  }
  doesNodeMatchRoute(node: MenuFlatNode, router: Router): boolean {
    if (!node.route) {
      return false;
    }
    try {
      const routerSegments = this.getRelaventUrlSegmentStrings(router.parseUrl(router.url));
      const nodeSegments = this.getRelaventUrlSegmentStrings(router.parseUrl(node.route));
      return this.isUrlSegmentsMatching(nodeSegments, routerSegments);
    } catch (e) {
      return false;
    }
  }
  isUrlSegmentsMatching(mustHave: string[], inThis: string[]): boolean {
    let inThisIndex = inThis.length - 1;
    for (let i = mustHave.length - 1; i > -1; i--) {
      if (inThis[inThisIndex] !== mustHave[i]) {
        return false;
      }
      inThisIndex--;
    }
    return true;
  }
  getRelaventUrlSegmentStrings(urlTree: UrlTree): string[] {
    return urlTree.root.children.primary.segments
      .filter(seg => seg.path !== '.')
      .map(seg => {
        return seg.path;
      });
  }
}
