import { Component, OnInit } from '@angular/core';
import { MessageListService } from '../service/message-list-service';
import { ContactModule, MessagePageModule } from './message.module';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
  providers : [MessageListService]

})
export class MessagePage implements OnInit {

  searchText:any;
  searchstatus:any;
  searchmajor:any;
  messages :MessagePageModule[] = [];
  list1 : MessagePageModule[]= [];
  // contacts:ContactModule[]=[];
 
 

  constructor(
    public MessagePageService : MessageListService
  ) { }

//   handleSelectCategory(message: { status: any; } | null) {
//     if (message == null) {
//         this.categorySelected = null;
//         this.filterItem = [{ FieldName: "status", Operator: "is-empty", Value: "" }];
//     } else {
//         this.categorySelected = message.status;
//         if (this.filterItem.find((el) => el.FieldName == 'name')) {
//             this.filterItem.push({
//                 FieldName: "typeId",
//                 Value: `${message.status}`
//             })
//         } else {
//             this.filterItem = [
//                 {
//                     FieldName: "typeId",
//                     Value: `${message.status}`
//                 }
//             ]
//         }
//     }
// }

  ngOnInit() {
    this.messages = this.MessagePageService.getMessagePageModule();
    // this.contacts = this.MessagePageService.getContactModule();
  }


}
