import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.page.html',
  styleUrls: ['./new-message.page.scss'],
})
export class NewMessagePage implements OnInit {

  // mysendform: any = FormGroup
  constructor() { }

  ngOnInit() {
    // this.mysendform = new FormGroup({
    //   inputText : new FormControl(),
    //   section : new FormControl(),
    //   major : new FormControl(),
    //   term : new FormControl(),
    //   sendNow : new FormControl(),
    //   sendLater : new FormControl()
    //  })
  }

}
