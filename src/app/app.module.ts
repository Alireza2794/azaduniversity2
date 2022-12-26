import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/config/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Device } from '@awesome-cordova-plugins/device/ngx';
import { Interceptor } from './http.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    // RouterModule,
    // ReactiveFormsModule,
    // Ng2SearchPipeModule,
    SharedModule,
    // MatDatepickerModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    //   // Register the ServiceWorker as soon as the application is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
    BrowserAnimationsModule],
  providers: [
    HttpClientModule, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
