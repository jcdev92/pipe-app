import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroCreatorPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  title = signal<string>('toggle case pipe example');
  description = signal<string>('this is a example of a custom pipe that toggles the case of each word in a string. It can be activated or deactivated.');
  isActive = signal<boolean>(true);
  toggleCase() {
    this.isActive.set(!this.isActive());
  }

  heroes = signal(heroes);
}
