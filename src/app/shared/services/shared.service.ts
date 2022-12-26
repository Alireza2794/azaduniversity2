import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataQueryInput } from '../models/shared.mode';
import { AuthService } from './auth.service';
// import packageJson from '../../../../package.json';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { Platform } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor(
        private http: HttpClient,
        
    ) { }

    public notificationCount: number = 0;


    updateNotification() {
        this.dataQuery({
            Code: "AdminNotifications",
            Columns: [],
            Params: [],
            Filters: [],
            Groups: [],
            Sort: [],
            Take: 100,
            Skip: 0
        }).then((res: any) => {
            this.notificationCount = res.result.totalCount;
        })
    }

    dataQuery(body: DataQueryInput) {
        return firstValueFrom(this.http.post(`${environment.baseUrl}/DynamicForm/DataQuery`, body));
    }
}