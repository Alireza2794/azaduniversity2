import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent, SearchbarChangeEventDetail } from '@ionic/angular';
import { MemberListService } from '../service/member-list-service';
import { StudentPageModule } from './student.module';


@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
  providers : [MemberListService]
})
export class StudentPage implements OnInit {

  searchText: any;
  searchmajor: any;
  searchsection: any;
  searchterm: any;
  tables :StudentPageModule[] = [];
  list : StudentPageModule[]= [];

  constructor(private memberListService : MemberListService) { }

  

  ngOnInit() {
    this.tables = this.memberListService.getStudentPageModule()
  }
   

}


