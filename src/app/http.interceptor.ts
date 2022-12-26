import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from './shared/services/toast.service';
@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private toast: ToastService, private router: Router) { }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('currentUser')) {
            httpRequest = httpRequest.clone({ setHeaders: { Authorization: `${JSON.parse(localStorage.getItem('currentUser')!).token}` } });
        }

        return next.handle(httpRequest).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status == 401 || error.status == 409 || error.status == 500 || error.status == 400) {
                    if (error.status === 401) {
                        localStorage.removeItem('currentUser');
                        this.router.navigate(['/auth']);
                    } else {
                        if (error.error.exception) {
                            this.toast.show(error.error.exception.message, 'danger');
                        } else {
                            this.toast.show(error.error.message, 'danger');
                        }
                    }
                } else {
                    this.toast.show('خطای ناشناخته', 'danger');
                }
                return throwError(error);
            })
        ) as Observable<HttpEvent<any>>;
    }
}