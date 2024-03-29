// import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from 'src/app/shared/config/shared.module';
// import { SharedModule } from 'src/app/shared/config/shared.module';
import { BannersPage, FormatTimePipe } from '../pages/banners/banners.page';
import { DashboardPage } from '../pages/dashboard/dashboard.page';
import { MapUniversityPage } from '../pages/map-university/map-university.page';
import { MessagePage } from '../pages/message/message.page';
import { NewMessagePage } from '../pages/message/new-message/new-message.page';
import { StudentPage } from '../pages/student/student.page';
import { DatePipe, DayOfWeekPipe, TimePipe, UrlPipe } from '../pips/index.api';
import { BaseService } from '../service/base.service';
// import { BaseService } from '../services/base.service';
import { routes } from './base.routes';
const Pages = [
    DashboardPage,
    StudentPage,
    MessagePage,
    NewMessagePage,
    MapUniversityPage,
    BannersPage
];
const Modules: any = [
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OverlayModule,
    SharedModule,
    Ng2SearchPipeModule,
    CommonModule,
    
];
const Pipes = [DayOfWeekPipe, TimePipe, UrlPipe, DatePipe];
@NgModule({
    declarations: [...Pages, ...Pipes,FormatTimePipe],
    imports: [CommonModule, RouterModule.forChild(routes), ...Modules],
    exports: [...Pipes],
    providers: [
        BaseService,
    ],
})
export class BaseModule { }