import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dayOfWeek' })
export class DayOfWeekPipe implements PipeTransform {
    transform(value: number): string {
        switch (value) {
            case 1:
                return 'شنبه';
            case 2:
                return 'یکشنبه';
            case 3:
                return 'دوشنبه';
            case 4:
                return 'سه شنبه';
            case 5:
                return 'چهارشنبه';
            case 6:
                return 'پنجشنبه';
            case 7:
                return 'جمعه';
            default:
                return 'نامشخص'
        }
    }
}