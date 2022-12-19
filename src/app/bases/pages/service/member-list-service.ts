import { Injectable } from "@angular/core";
import { StudentPageModule } from "../student/student.module";

@Injectable()


export class MemberListService {
  private  tables: StudentPageModule[] = [
        {
            imagesrc : './assets/avatar/womenavatar.png',
            fullname: 'معصومه حیدری',
            studentid: '9812302458',
            personalid: '0087962410',
            major: 'مهندسی مواد و صنایع',
            section: 'کارشناسی',
            term : '4',
            star: '428'
        },
        {
            imagesrc : './assets/avatar/menavatar.png',
            fullname: 'حمیدرضا اکبرزاده',
            studentid: '9812306789',
            personalid: '5059325764',
            major: 'مهندسی کامپیوتر',
            section: 'کارشناسی ارشد',
            term : '2',
            star: '200'
        },
        {
            imagesrc : './assets/avatar/menavatar.png',
            fullname: 'کاظم محمودی',
            studentid: '9812306789',
            personalid: '5059325764',
            major: 'مهندسی کامپیوتر',
            section: 'کاردانی',
            term : '1',
            star: '820'
        },
        {
            imagesrc : './assets/avatar/Frameemptyblueavatar.png',
            fullname: 'احمدرضا عابدینی',
            studentid: '9812306789',
            personalid: '5059325764',
            major: 'مهندسی کامپیوتر',
            section: 'کاردانی',
            term : '1',
            star: '820'
        },
        {
            imagesrc : './assets/avatar/Frameemptyavatargray.png',
            fullname: 'قدرت اله میاندویی اصل',
            studentid: '9812306789',
            personalid: '5059325764',
            major: 'مهندسی کامپیوتر',
            section: 'کاردانی',
            term : '1',
            star: '820'
        }
        
    ]
    

  getStudentPageModule(){
    return this.tables.slice()
  }
}


