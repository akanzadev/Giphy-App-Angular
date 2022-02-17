import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { GiphyPageComponent } from './pages/giphy-page/giphy-page.component';
import { GiphysComponent } from './components/giphys/giphys.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [SearchComponent, GiphyPageComponent, GiphysComponent],
  exports: [GiphyPageComponent],
  imports: [CommonModule, InfiniteScrollModule],
})
export class GiphyModule {}
