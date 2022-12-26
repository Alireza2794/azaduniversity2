import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActionSheetController, RangeCustomEvent, SearchbarChangeEventDetail } from '@ionic/angular';
import { UserInformationModel } from 'src/app/shared/models/shared.mode';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { StudentPageModule } from '../../models/base.mode';
import { BaseService } from '../../service/base.service';
// import { MemberListService } from '../../service/member-list-service';


@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  searchText: any;
  searchmajor: any;
  searchsection: any;
  searchterm: any;
  // tables :StudentPageModule[] = [];
  // list : StudentPageModule[]= [];
  feilds: any[]= [];
  user: UserInformationModel []= [];


  constructor(
    private _baseService: BaseService,
    private _toast: ToastService,
    private _actionSheet: ActionSheetController,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
  ) { }

  fetchData() {
    this._baseService.dataQuery({
      Code:"AdminAllPersons",
      Columns:[],
      Params:[],
      Filters:[],
      Groups:[],
      Sort:[{"Field":"id","Sort":"desc"}],
      Take:100,
      Skip:0
    }).then((res: any) => {
      res.result.items.forEach((element: { open: boolean; }) => {
        element.open = false;
    });
    this.user = res.result.items;
});
}

  ngOnInit() {
    // this.tables = this.memberListService.getStudentPageModule()
    this.fetchData();

  }
   

}


