import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public appPages = [
    { title: 'داشبورد', url: '/dashboard', Image: './assets/icons/Framedashboard.png', Image2: './assets/icons/Framedashboard2.png' },
    { title: 'لیست دانشجویان', url: '/student', Image: './assets/icons/Framelist.png', Image2: './assets/icons/Framelist2.png'  },
    { title: 'ارسال پیام در کارتابل', url: '/message', Image: './assets/icons/Iconcartable.png', Image2: './assets/icons/Iconcartable2.png'  },
    { title: 'نقشه دانشگاه', url: '/map-university', Image: './assets/icons/Framemap.png' , Image2: './assets/icons/Framemap2.png' },
    { title: 'بنرها و تبلیغات', url: '/banners', Image: './assets/icons/Framebanner.png' , Image2: './assets/icons/Framebanner2.png' }
  ];
  

  constructor(
    public _authService: AuthService,
    public _sharedService : SharedService,
    private _alert: AlertController,
    private _fcm: FCM,
    private _router: Router,
  ) { }

  ngOnInit() {
    // this._fcm.subscribeToTopic(`${this._authService._currentUser.id}`);
    this._fcm.subscribeToTopic(`all`);
  }

  logout() {
    this._alert.create({
        header: 'آیا از انجام عملیات مطمئن هستید؟',
        buttons: [
            {
                text: 'لغو',
                role: 'cancel',
            },
            {
                text: 'تایید',
                role: 'confirm',
                handler: () => {
                    this._fcm.unsubscribeFromTopic(`all`);
                    // this._fcm.unsubscribeFromTopic(`${this._authService._currentUser.id}`);
                    // this._authService.currentUser = null;
                    localStorage.removeItem('currentUser');
                    this._router.navigate(['auth/login']);
                },
            },
        ],
    }).then((c) => {
        c.present();
    });
}

}
