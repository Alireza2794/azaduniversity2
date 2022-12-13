import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'داشبورد', url: '/folder/dashboard', Image: './assets/icons/dashboard-5479.png' },
    { title: 'لیست دانشجویان', url: '/folder/student-list', Image: './assets/icons/user-268.png'  },
    { title: 'ارسال پیام در کارتابل', url: '/folder/cartable', Image: './assets/icons/send-mail-2574.png'  },
    { title: 'نقشه دانشگاه', url: '/folder/map-university', Image: './assets/icons/maps-location-11094_1.png'  },
    { title: 'بنرها و تبلیغات', url: '/folder/banners', Image: './assets/icons/search-1163.png'  }
  ];
  constructor() {}
}
