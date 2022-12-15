import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMessagePage } from './new-message.page';

const routes: Routes = [
  {
    path: '',
    component: NewMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMessagePageRoutingModule {}
