// import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import moment from './jalali-moment';
// import { CalendarComponent } from '../calendar/calendar.component';
// // import { CalendarComponent } from '../index.api';

// @Component({
//     selector: 'app-date-picker',
//     templateUrl: './date-picker.component.html',
//     styleUrls: ['./date-picker.component.scss']
// })
// export class DatePickerComponent implements OnInit {
//     constructor(private modal: ModalController) {
//     }

//     _value: string = null;
//     @Input()
//     public get value() {
//         return this._value;
//     }
//     public set value(v) {
//         if (v != null) {
//             this._value = v;
//         }
//     }

//     @Output()
//     valueChange: EventEmitter<any> = new EventEmitter();

//     openModal() {
//         this.modal.create({
//             id: 'modal',
//             component: CalendarComponent
//         }).then((c) => {
//             c.present();
//             c.onDidDismiss().then((res) => {
//                 if (res.data) {
//                     this._value = moment.from(res.data, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
//                     this.valueChange.emit(this._value);
//                 }
//             });
//         })
//     }

//     ngOnInit(): void { }
// }