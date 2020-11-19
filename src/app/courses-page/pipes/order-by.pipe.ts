import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@app/models';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(arr: Course[]): Course[] {
    const copy = [...arr];
    return copy.sort((a, b) => this.newestFirst(a, b));
  }

  private newestFirst(courseA, courseB) {
    return courseB.creationDate.getTime() - courseA.creationDate.getTime()
  }
}
