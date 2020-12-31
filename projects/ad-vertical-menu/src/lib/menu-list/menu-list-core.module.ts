import { AdMenuListRoutingService } from './menu-list-routing.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdMenuListBuilderService } from './menu-list-builder.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], providers: [
    AdMenuListBuilderService,
    AdMenuListRoutingService,
  ]
})
export class MenuListCoreModule { }
