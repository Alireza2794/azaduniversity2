// import { Routes } from "@angular/router";
// import { DashboardPage } from "../pages/dashboard/dashboard.page";
// import { StudentPage } from "../pages/student/student.page";
// import { MessagePage } from "../pages/message/message.page";
// import { NewMessagePage } from "../pages/message/new-message/new-message.page";
// import { MapUniversityPage } from "../pages/map-university/map-university.page";
// import { BannersPage } from "../pages/banners/banners.page";

// export const routes: Routes = [
//     {
//         path: '',
//         redirectTo: 'dashboard',
//         pathMatch: 'full'
//     },
//     {
//         path: 'dashboard',
//         component: DashboardPage,
//     },
//     {
//         path: 'student',
//         component: StudentPage
//     },
//     {
//         path: 'message',
//         children: [
//             {
//                 path: '',
//                 component: MessagePage,
//             },
//             {
//                 path: 'new-message',
//                 children: [
//                     {
//                         path: 'new-message',
//                         component: NewMessagePage
//                     }
//                 ]
//             },
//         ]
//     },
//     {
//         path: 'map-university',
//         component: MapUniversityPage
//     },
//     {
//         path: 'banners',
//         component: BannersPage
//     }
// ]