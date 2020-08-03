import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Constants } from '../constant/constants';

@Pipe({name: 'dayFormat'})

export class CustomDayPipe extends DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return super.transform(value, Constants.DATE_FMT);
    }
}