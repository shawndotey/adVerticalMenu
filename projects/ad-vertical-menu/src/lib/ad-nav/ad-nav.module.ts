import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AdNavMenuComponent} from './ad-nav-menu/ad-nav-menu.component';
import { AdNavNesterDirective } from './ad-nav-nester/ad-nav-nester.directive';
import { AdNavItemDirective } from './ad-nav-item/ad-nav-item.directive';
import { MatTreeModule } from '@angular/material/tree';


@NgModule({
  imports: [
    CommonModule,
    MatTreeModule,
    RouterModule
  ],
  declarations: [
    AdNavMenuComponent,
    AdNavNesterDirective,
    AdNavItemDirective
  ],
  exports: [
    AdNavMenuComponent,
    AdNavNesterDirective,
    AdNavItemDirective
  ]
})
export class AdNavModule { }
