import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {

    transform(value: string, limit?: any) {


        return value.substr(0,50) + "....";

    }


}