import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Device } from '@awesome-cordova-plugins/device/ngx';
import { Platform } from '@ionic/angular';
import { AuthService as AuService } from 'src/app/shared/services/auth.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { AuthService } from '../../services/auth.service';

@Component({
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
    constructor(
        private _formBuilder: FormBuilder,
        private _service: AuthService,
        private _sharedService: SharedService,
        private _authService: AuService,
        // private _platform: Platform,
        // private _device: Device,
        private _router: Router,

    ) { }

    FormGroup!: FormGroup;
    loading: boolean = false;
    downloadApk: boolean = false;
    isAndroidApk: boolean = false;
    
    login() {
        if (this.FormGroup.invalid) { this.FormGroup.markAllAsTouched(); return; }
        this.loading = true;
        this._service.login(this.FormGroup.value.usernameFormControl, this.FormGroup.value.passwordFormControl).then((res: any) => {
            this._authService.currentUser = res.result;
            this._sharedService.dataQuery({
                "Code":"AdminAllPersons",
                "Columns":[],
                "Params":[],
                "Filters":[],
                "Groups":[],
                "Sort":[{"Field":"id","Sort":"desc"}],
                "Take":100,
                "Skip":0
            }).then((res2: any) => {
                this._authService.currentUser = { ...res.result, information: { ...res2.result.items[0] } };
                this._router.navigate(['/']);
            }).finally(() => {
                this.loading = false;
            });
        }).catch(() => {
            this.loading = false;
        });
    }

    ngOnInit(): void {
        // if (this._platform.is("android")) {
        //     this.downloadApk = true;
        //     if ((this._device != null) && (this._device.uuid != null) && (this._device.uuid.length > 0)) {
        //         this.downloadApk = false;
        //         this.isAndroidApk = true;
        //     }
        // }
        this.FormGroup = this._formBuilder.group({
            usernameFormControl: ['', Validators.required],
            passwordFormControl: ['', Validators.required]
        });
    }
}
