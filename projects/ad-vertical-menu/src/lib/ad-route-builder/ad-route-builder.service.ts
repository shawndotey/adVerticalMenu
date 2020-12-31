import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AdRouteBuilderNode } from './ad-route-builder-node';

@Injectable({
  providedIn: 'root'
})
export class AdRouteBuilderService {
  routeNode: AdRouteBuilderNode = new AdRouteBuilderNode();
  parentPath: string;
  constructor(
    private router: Router
  ) { }
  initRoutes(routes: Routes, parentPath: string) {
    this.routeNode.routes = routes;
    this.parentPath = parentPath;
  }
  addChildRoutes(routes: Routes, parentPath: string = this.parentPath) {
    this.routeNode.addChildRoutes(routes, parentPath);
  }
  buildRouterModuleRoutes() {
    this.router.config.unshift(...this.routeNode.routes);
  }
}
