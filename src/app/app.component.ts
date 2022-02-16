import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  theme = 'light';
  constructor(private darkModeService: DarkModeService) {}
  ngOnInit(): void {
    this.darkModeService.getTheme()
    this.darkModeService.theme$.subscribe((theme) => {
      this.theme = theme;
    });
  }
}
