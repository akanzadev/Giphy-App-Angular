import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  presentTheme = new BehaviorSubject<string>('light');
  theme$ = this.presentTheme.asObservable();
  constructor() {}

  getTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) this.presentTheme.next(theme);
  }

  changeTheme() {
    this.presentTheme.value === 'light'
      ? this.presentTheme.next('dark')
      : this.presentTheme.next('light');
    localStorage.setItem('theme', this.presentTheme.value);
  }
}
