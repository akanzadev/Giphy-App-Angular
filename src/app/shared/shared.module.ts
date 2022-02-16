import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchesComponent } from './components/searches/searches.component';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';

@NgModule({
  declarations: [SideBarComponent, SearchesComponent, DarkModeButtonComponent],
  exports: [SideBarComponent, DarkModeButtonComponent],
  imports: [CommonModule],
})
export class SharedModule {}
