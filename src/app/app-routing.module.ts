import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
  {
    path: 'dashboard',title : 'دانشگاه آزاد اسلامی - داشبورد',
    loadChildren: () => import('./bases/pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'student',title : 'لیست دانشجویان',
    loadChildren: () => import('./bases/pages/student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'message',title : 'پیام های کارتابل' , 
    loadChildren: () => import('./bases/pages/message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'new-message', title : 'ارسال پیام جدید' , 
    loadChildren: () => import('./bases/pages/message/new-message/new-message.module').then( m => m.NewMessagePageModule)
  },
  {
    path: 'map-university', title : 'نقشه دانشگاه' , 
    loadChildren: () => import('./bases/pages/map-university/map-university.module').then( m => m.MapUniversityPageModule)
  },
  {
    path: 'banners',title : 'بنرها و تبلیغات' , 
    loadChildren: () => import('./bases/pages/banners/banners.module').then( m => m.BannersPageModule)
  },
  
  // {
  //   path: ' ',
  //   loadChildren: () => import('./bases/config/base.module').then( m => m.BaseModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
