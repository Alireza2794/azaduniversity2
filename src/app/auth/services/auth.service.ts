import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        console.log(username);
        console.log(password);
        console.log(`${environment.baseUrl}/User/Authenticate`);
        return firstValueFrom(this.http.post(`${environment.baseUrl}/User/Authenticate`, {
            username,
            password
        }));
    }
}