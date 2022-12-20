import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagePage } from '../message.page';

import { NewMessagePage } from './new-message.page';

const routes: Routes = [
  {
    path: '',
    component: NewMessagePage
  },
  {
    path: './message',
    component: MessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMessagePageRoutingModule {}
