import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from "../interfaces/hero.interfaces";

@Pipe({
  name: 'heroColor'
})
export class HeroColorPipe implements PipeTransform {
  transform(value: Color): string {
    return ColorMap[value] ?? ColorMap[Color.red];
  }
}
