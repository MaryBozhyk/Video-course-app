import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return '';
    }

    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    
    return (hours) ? `${hours}h ${minutes}min` : `${minutes}min`;
  }
}
