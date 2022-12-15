import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapUniversityPageRoutingModule } from './map-university-routing.module';

import { MapUniversityPage } from './map-university.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapUniversityPageRoutingModule
  ],
  declarations: [MapUniversityPage]
})
export class MapUniversityPageModule {}
