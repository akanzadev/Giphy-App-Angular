import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../../services/giphy.service';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss'],
})
export class SearchesComponent implements OnInit {
  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {}

  get record() {
    return this.giphyService.recordList;
  }

  searchGiphys(searchTerm: string) {
    this.giphyService.getGifs(searchTerm).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
