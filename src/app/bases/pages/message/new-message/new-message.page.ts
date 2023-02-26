import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BaseService } from 'src/app/bases/service/base.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.page.html',
  styleUrls: ['./new-message.page.scss'],
})
export class NewMessagePage implements OnInit {

  constructor(public baseService: BaseService,
    private _formBuilder: FormBuilder,
    ) {}

    FormGroupMessage = FormGroup;

  ngOnInit() {}

  AddNotification(title: string, text: string, groupId: [number], personId: [number], image: string = '', actionUrl: string = '', activeInbox: boolean = true) {
    return new Promise(async (resolve, reject) => {
      this.baseService.AddNotification({
        "Title": title,
        "Text": text,
        "ActionUrl": actionUrl,
        "Image": image,
        "ActiveInbox": activeInbox,
        "GroupId": groupId,
        "PersonId": personId
      }).then((result: any) => {
         resolve(result); }, (err) => { reject(err); });
    });
  }

}
