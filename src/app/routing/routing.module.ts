
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
export class AppRoutingModule {
  constructor() {

  }
}
