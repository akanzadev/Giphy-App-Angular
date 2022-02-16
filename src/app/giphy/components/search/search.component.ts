import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GiphyService } from '../../../services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {}

  searchGifs() {
    const value = this.searchInput.nativeElement.value;
    this.giphyService.getGifs(value).subscribe({
      next: (data) => {
        console.log('Data Search', data);
        this.searchInput.nativeElement.value = '';
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
