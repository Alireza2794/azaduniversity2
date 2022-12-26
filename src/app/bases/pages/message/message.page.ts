import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { DataQueryInput, MessagePageModule } from '../../models/base.mode';
import { BaseService } from '../../service/base.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
  providers: [ BaseService]

})
export class MessagePage implements OnInit {

  searchText: any;
  searchstatus: any;
  searchmajor: any;
  // messages: MessagePageModule[] = [];
  // list1: MessagePageModule[] = [];
  notificationItems: DataQueryInput[] = [];



  constructor(
    // public MessagePageService: MessageListService,
    private _baseService: BaseService,
    private _service: SharedService,
  ) { 
    this._service.updateNotification();
  }



 

  fetchData() {
    this.notificationItems = [];
    this._baseService.dataQuery({
      Code: "AdminNotifications",
      Columns: [],
      Params: [],
      Filters: [],
      Groups: [],
      Sort:[],
      Take: 100,
      Skip: 0
    }).then((res: any) => {
      res.result.items.forEach((element: { open: boolean; }) => {
        element.open = false;
    });
    this.notificationItems = res.result.items;
});
  }



  ngOnInit(): void {
    // this.messages = this.MessagePageService.getMessagePageModule();
    this.fetchData();

    // this.contacts = this.MessagePageService.getContactModule();
  }


}
