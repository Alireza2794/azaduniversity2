import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'داشبورد', url: '/dashboard', Image: './assets/icons/Framedashboard.png', Image2: './assets/icons/Framedashboard2.png' },
    { title: 'لیست دانشجویان', url: '/student', Image: './assets/icons/Framelist.png', Image2: './assets/icons/Framelist2.png'  },
    { title: 'ارسال پیام در کارتابل', url: '/message', Image: './assets/icons/Iconcartable.png', Image2: './assets/icons/Iconcartable2.png'  },
    { title: 'نقشه دانشگاه', url: '/map-university', Image: './assets/icons/Framemap.png' , Image2: './assets/icons/Framemap2.png' },
    { title: 'بنرها و تبلیغات', url: '/banners', Image: './assets/icons/Framebanner.png' , Image2: './assets/icons/Framebanner2.png' }
  ];
  constructor() {}

  ngOnInit(): void {
    
  }

}
