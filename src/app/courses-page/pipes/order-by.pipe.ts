import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@app/models';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(arr: Course[]): Course[] {
    return arr.sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime());
  }
}
