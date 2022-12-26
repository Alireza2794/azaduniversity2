import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from '../pages/login/login.page';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './auth.routes';
import { AuthService } from '../services/auth.service';
import { IonicModule } from '@ionic/angular';
import { Interceptor } from 'src/app/http.interceptor';

@NgModule({ 
    declarations: [LoginPage],
    imports: [CommonModule, IonicModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
    exports: [],
    providers: [
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    ],
})
export class AuthModule { }