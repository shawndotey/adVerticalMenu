import { Routes } from '@angular/router';
export class AdRouteBuilderNode {
  routes: Routes = [];
  name: string;
  addChildRoutes(routes: Routes, parentPath: string) {
    const route = this.getRouteByPathName(parentPath);
      route.children = route.children || [];
      route.children.unshift(...routes);
  }
  getRouteByPathName(pathName: string) {
    return this.routes.filter(route => {
      return route.path === pathName;
    })[0];
  }
}
