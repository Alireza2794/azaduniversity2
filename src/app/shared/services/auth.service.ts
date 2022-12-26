import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/shared.mode';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() {
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
        }
    }

    public _currentUser: UserModel = new UserModel();

    public get currentUser() {
        return this._currentUser;
    }
    public set currentUser(v) {
        this._currentUser = v;
        // if (v && v.information) {
        //     if (v.information.profileImage == null || v.information.profileImage.length == 0) {
        //         switch (v.information.gender) {
        //             case 'مرد':
        //                 this._currentUser.information.profileImage = 'assets/images/avatar.png';
        //                 break;
        //             case 'زن':
        //                 this._currentUser.information.profileImage = 'assets/images/avatar-2.png';
        //                 break;
        //             default:
        //                 this._currentUser.information.profileImage = 'assets/images/avatar-3.png';
        //                 break;
        //         }
        //     } else {
        //         if (this._currentUser.information.profileImage.split(environment.baseUrl).length == 1 && this._currentUser.information.profileImage.split('assets/images').length == 1) {
        //             this._currentUser.information.profileImage = `${environment.baseUrl}/static/pictures/${this._currentUser.information.profileImage}`;
        //         }
        //     }
        // }
        localStorage.setItem('currentUser', JSON.stringify(v));
    }

    // public _settingApp: any = {};
    // public get settingApp() {
    //     return this._settingApp;
    // }
    // public set settingApp(v) {
    //     if (localStorage.getItem('settingApp')) {
    //         const item = { ...JSON.parse(localStorage.getItem('settingApp')), ...v };
    //         localStorage.setItem('settingApp', JSON.stringify(item));
    //         this._settingApp = item;
    //     } else {
    //         this._settingApp = v;
    //         localStorage.setItem('settingApp', JSON.stringify(v));
    //     }
    // }
}