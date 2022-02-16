import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-button',
  templateUrl: './dark-mode-button.component.html',
  styleUrls: ['./dark-mode-button.component.scss'],
})
export class DarkModeButtonComponent implements OnInit {
  title = 'gift-app';
  theme = 'light';
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.darkModeService.getTheme();
    this.darkModeService.theme$.subscribe((theme) => {
      this.theme = theme;
    });
  }
  changeTheme() {
    this.darkModeService.changeTheme();
  }
}
