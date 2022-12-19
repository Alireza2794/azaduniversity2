import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BannersPage } from './banners.page';

const routes: Routes = [
  {
    path: '',
    component: BannersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BannersPageRoutingModule {}
