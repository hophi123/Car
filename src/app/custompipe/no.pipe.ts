import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../constant/constants'

@Pipe({name: 'vinnoformat'})

export class CustomVinNoPipe implements PipeTransform {
    transform(value: any): any {
        return Constants.VIN_NO+value;
    }
}