import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'داشبورد', url: '/folder/dashboard', Image: './assets/icons/Framedashboard.png', Image2: './assets/icons/Framedashboard2.png' },
    { title: 'لیست دانشجویان', url: '/folder/student', Image: './assets/icons/Framelist.png', Image2: './assets/icons/Framelist2.png'  },
    { title: 'ارسال پیام در کارتابل', url: '/folder/message', Image: './assets/icons/Iconcartable.png', Image2: './assets/icons/Iconcartable2.png'  },
    { title: 'نقشه دانشگاه', url: '/folder/map-university', Image: './assets/icons/Framemap.png'  },
    { title: 'بنرها و تبلیغات', url: '/folder/banners', Image: './assets/icons/Framebanner.png'  }
  ];
  constructor() {}

  ngOnInit(): void {
    
  }

}
