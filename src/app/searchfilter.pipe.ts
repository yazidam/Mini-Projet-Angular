import {Pipe, PipeTransform} from '@angular/core';
import {Employee} from './model/employee';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(db: Employee[], searchValue: string): Employee [] {
    if (!db || !searchValue) {
      return db;
    }
    return db.filter(empp =>
      empp.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      empp.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      empp.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      empp.phone.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
