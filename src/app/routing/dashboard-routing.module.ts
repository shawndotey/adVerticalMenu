
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdRouteBuilderService } from 'projects/ad-vertical-menu/src/lib/ad-route-builder/ad-route-builder.service';

export const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
  ]
})
export class AdDashboardRoutingModule {
  constructor(adRouteBuilderService: AdRouteBuilderService) {
    adRouteBuilderService.initRoutes(routes, 'dashboard');
    adRouteBuilderService.addChildRoutes(routes);
  }
}
