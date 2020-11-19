import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '@app/models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(arr: Course[], condition: string): Course[] {
    const transformedCondition = condition.toLowerCase();
    return arr.filter(course => course.title.toLowerCase().includes(transformedCondition));
  }
}
