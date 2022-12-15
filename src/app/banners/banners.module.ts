import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BannersPageRoutingModule } from './banners-routing.module';

import { BannersPage } from './banners.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BannersPageRoutingModule
  ],
  declarations: [BannersPage]
})
export class BannersPageModule {}
