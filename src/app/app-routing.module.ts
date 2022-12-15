import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
  {
    path: 'dashboard',title : 'دانشگاه آزاد اسلامی - داشبورد',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'student',title : 'لیست دانشجویان',
    loadChildren: () => import('./student/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'message',title : 'پیام های کارتابل' , 
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'new-message', title : 'ارسال پیام جدید' , 
    loadChildren: () => import('./new-message/new-message.module').then( m => m.NewMessagePageModule)
  },
  {
    path: 'map-university', title : 'نقشه دانشگاه' , 
    loadChildren: () => import('./map-university/map-university.module').then( m => m.MapUniversityPageModule)
  },
  {
    path: 'banners',title : 'بنرها و تبلیغات' , 
    loadChildren: () => import('./banners/banners.module').then( m => m.BannersPageModule)
  }
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
