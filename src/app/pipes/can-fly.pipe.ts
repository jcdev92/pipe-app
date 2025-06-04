import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(canFly: boolean ): string {
    return canFly ? 'Puede Volar' : 'No Puede Volar';
  }
}
