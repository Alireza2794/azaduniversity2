import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMessagePageRoutingModule } from './new-message-routing.module';

import { NewMessagePage } from './new-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMessagePageRoutingModule
  ],
  declarations: [NewMessagePage]
})
export class NewMessagePageModule {}
