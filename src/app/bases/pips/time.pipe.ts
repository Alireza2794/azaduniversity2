import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timePipe' })
export class TimePipe implements PipeTransform {
    transform(value: string): string {
        if (value != null) {
            return value.substring(0, 5)
        } else {
            return '00:00';
        }
    }
}