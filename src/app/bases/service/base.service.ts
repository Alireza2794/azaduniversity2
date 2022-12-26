import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataQueryInput } from '../models/base.mode';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    constructor(private http: HttpClient) { }

    dataQuery(body: DataQueryInput) {
        return firstValueFrom(this.http.post(`${environment.baseUrl}/DynamicForm/DataQuery`, body));
    }

    // AdminNotifications(body: any){
    //     return firstValueFrom(this.http.post(`${environment.baseUrl}/DynamicForm/DataQuery`, body));
    // }

    AddNotification(body: any){
        return this.http.post(`${environment.baseUrl}/AdminPanel/AddNotification`, body).toPromise();
    }

    AddBanners(body: any){
        return this.http.post(`${environment.baseUrl}/AdminPanel/AddBanners`, body).toPromise();
    }

    RemoveBanner(body: any){
        return this.http.post(`${environment.baseUrl}/AdminPanel/RemoveBanner`, body).toPromise();
    }

    AddPerson(body: any){
        return this.http.post(`${environment.baseUrl}/AdminPanel/AddPerson`, body).toPromise();
    }

    AddPersonToGroups(body: any){
        return this.http.post(`${environment.baseUrl}/AdminPanel/AddPersonToGroups`, body).toPromise();
    }

    RemovePersonToGroups(body: any){
        return this.http.post(`${environment.baseUrl}/AdminPanel/RemovePersonToGroups`, body).toPromise();
    }

    DeActivePerson(body: any){
        return this.http.post(`${environment.baseUrl}/AdminPanel/DeActivePerson`, body).toPromise();
    }

    ActivePerson(body: any){
        return this.http.post(`${environment.baseUrl}/AdminPanel/ActivePerson`, body).toPromise();
    }

    RemoveProfileImage(body: any){
        return this.http.post(`${environment.baseUrl}/AdminPanel/RemoveProfileImage`, body).toPromise();
    }

    UpdatePerson(body: any){
        return this.http.post(`${environment.baseUrl}/AdminPanel/UpdatePerson`, body).toPromise();
    }

    ChangePassword(body: any){
        return this.http.post(`${environment.baseUrl}/AdminPanel/ChangePassword`, body).toPromise();
    }


}