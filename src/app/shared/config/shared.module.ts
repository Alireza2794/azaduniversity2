import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';
import { IonicModule } from '@ionic/angular';
import { Interceptor } from 'src/app/http.interceptor';
// import { Interceptor } from 'src/app/http.interceptor';
import { CalendarComponent, DatePickerComponent, HomeComponent } from '../components/index.api';
import { routes } from './shared.routes';

const Components = [
    DatePickerComponent,
    CalendarComponent,
    HomeComponent
    
];
const Modules = [
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    
]

@NgModule({
    declarations: [...Components],
    imports: [CommonModule, RouterModule.forChild(routes), IonicModule.forRoot(), HttpClientModule, ...Modules],
    exports: [...Components],
    providers: [
        FCM,
        { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
        { provide: DateAdapter, useClass: MatDatepickerModule, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FORMATS },
    ],
})
export class SharedModule { }