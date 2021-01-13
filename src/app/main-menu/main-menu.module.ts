import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdMainMenuService} from './main-menu.service';
import { MainMenu } from 'projects/ad-vertical-menu/src/lib/model/dashboard-sidenav.MainMenu.model';
import { AdMenuListBuilderService } from 'projects/ad-vertical-menu/src/lib/menu-list/menu-list-builder.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AdMainMenuService
  ]
})
export class AdMainMenuModule {
  constructor(
    private mainMenuService:AdMainMenuService
    ){
      this.mainMenuService.buildMenu();
  }
}
