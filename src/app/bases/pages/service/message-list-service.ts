import { Injectable } from "@angular/core";
import { ContactModule, MessagePageModule } from "../message/message.module";

@Injectable()


export class MessageListService {
  private messages: MessagePageModule[] = [
    {
      date: '1401/08/24',
      day: 'شنبه',
      titleMessage: 'با سلام خدمت دانشجویان جدید الورود انتخاب واحد ترم یک شما توسط سیستم انجام می شود لذا لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ',
      status: 'ارسال شده',
      major: 'مقطع:کارشناسی',
      term: 'ترم:1'
    },
    {
      date: '1401/08/24',
      day: 'شنبه',
      titleMessage: 'با سلام خدمت دانشجویان جدید الورود انتخاب واحد ترم یک شما توسط سیستم انجام می شود لذا لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ',
      status: 'پیش نویس',
      major: 'مقطع:کارشناسی'
    },
    {
      date: '1401/08/24',
      day: 'شنبه',
      titleMessage: 'با سلام خدمت دانشجویان جدید الورود انتخاب واحد ترم یک شما توسط سیستم انجام می شود لذا لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ',
      status: 'زمان بندی شده',
      section: 'رشته:مهندسی مواد'
    }

  ]

  // private contacts: ContactModule[] = [
  //   {
  //     major:'مقطع : کارشناسی',
  //     section:'',
  //     term: 'ترم : 1'
  //   },
  //   {
  //     major:'مقطع : کارشناسی',
  //     section:'',
  //     term: ''
  //   },
  //   {
  //     major:'',
  //     section:'رشته : مهندسی مواد',
  //     term: ''
  //   }
  // ]

  getMessagePageModule() {
    return this.messages.slice()
  }
  // getContactModule() {
  //   return this.contacts.slice()
  // }
}


