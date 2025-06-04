import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, active: boolean = true): string {
    if (!value) {
      return value;
    }

    return value.split(' ').map(word => {
      if (word.length > 0) {
        return active ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word[0].toLowerCase() + word.slice(1).toLowerCase();
      }
      return word;
    }).join(' ');
  }
}
