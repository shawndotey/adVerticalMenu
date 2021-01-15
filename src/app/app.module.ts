import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdVerticalMenuModule } from 'projects/ad-vertical-menu/src/lib/ad-vertical-menu.module';
import { AdMainMenuModule } from './main-menu/main-menu.module';
import { AppRoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AdVerticalMenuModule,
    AdMainMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
