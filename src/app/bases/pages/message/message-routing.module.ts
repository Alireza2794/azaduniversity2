import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagePage } from './message.page';
import { NewMessagePage } from './new-message/new-message.page';

const routes: Routes = [
  {
    path: '',
    component: MessagePage
  },
  {
    path: './new-message',
    component: NewMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagePageRoutingModule {}
