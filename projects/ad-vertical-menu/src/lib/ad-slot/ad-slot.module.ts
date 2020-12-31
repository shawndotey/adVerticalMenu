import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdAnchorDirective } from './ad-anchor.directive';
import { AdSlotComponent } from './ad-slot.component';

@NgModule({
  declarations: [
    AdSlotComponent,
    AdAnchorDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdSlotComponent,
    AdAnchorDirective
  ]
})
export class AdSlotModule { }
