import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(items: Array<any>, propertyName: string, value: string): Array<any> {
    if (!value) {
      return items;
    }
    return items.filter(item => item[propertyName].toUpperCase().includes(value.toUpperCase()));
  }

}
