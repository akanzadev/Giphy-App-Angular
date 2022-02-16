import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { GiphyPageComponent } from './pages/giphy-page/giphy-page.component';
import { GiphysComponent } from './components/giphys/giphys.component';

@NgModule({
  declarations: [SearchComponent, GiphyPageComponent, GiphysComponent],
  exports: [GiphyPageComponent],
  imports: [CommonModule],
})
export class GiphyModule {}
