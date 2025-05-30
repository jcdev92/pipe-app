import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'en' | 'es' | 'fr';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private currentLocale = signal<AvailableLocale>('es');

  constructor() {
    const locale = localStorage.getItem('locale') as AvailableLocale;
    if (locale) {
      this.currentLocale.set(locale);
    }
   }

  get getLocale(): AvailableLocale {
    return this.currentLocale();
  }

  changeLocale(locale: AvailableLocale): void {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    location.reload();
  }
}
