import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({ name: 'jdate' })
export class DatePipe implements PipeTransform {
    transform(value: string, time: boolean = false): any {

        if (value != null && parseInt(value.split('/')[0]) > 2000) {
            if (!time) {
                return moment.from(value, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
            } else {
                return moment.from(value, 'YYYY/MM/DD').locale('fa').format('hh:mm');
            }
        } else {
            return value;
        }
    }
}