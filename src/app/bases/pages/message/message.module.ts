import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePageRoutingModule } from './message-routing.module';

import { MessagePage } from './message.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DatePipe } from '../../pips/date.pipe';

// const Pipes = [DatePipe];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MessagePage],
})
export class MessagePageModule {
  date: any;
  day: any;
  titleMessage!: string;
  status!: string;
  major?: any;
  section?: any;
  term?: any;
}

export class ContactModule {
    major!: string;
    section!: string;
    term!: any;
}
