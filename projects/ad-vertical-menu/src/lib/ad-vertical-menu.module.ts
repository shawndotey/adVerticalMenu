import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdVeritcalMenuComponent } from './ad-veritcal-menu.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { AdNavModule } from './ad-nav/ad-nav.module';

@NgModule({
  declarations: [
    AdVeritcalMenuComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatBadgeModule,
    AdNavModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    AdVeritcalMenuComponent
  ]
})
export class AdVerticalMenuModule { }
