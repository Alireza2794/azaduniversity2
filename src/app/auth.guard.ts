import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        const userAuth = JSON.parse(localStorage.getItem('currentUser')!);
        if (userAuth) {
            return true;
        }
        this.router.navigate(['/auth']);
        return false;
    }
}