import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPageRoutingModule } from './student-routing.module';
import { StudentPage } from './student.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [StudentPage]
})
export class StudentPageModule {
  [x: string]: any;
  imagesrc: any;
  fullname!: string;
  studentid!: string;
  personalid!: string;
  major!: string;
  section!: string;
  term!: string;
  star!: string;
}

