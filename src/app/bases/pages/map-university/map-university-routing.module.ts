import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapUniversityPage } from './map-university.page';

const routes: Routes = [
  {
    path: '',
    component: MapUniversityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapUniversityPageRoutingModule {}
