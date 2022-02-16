import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../../services/giphy.service';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss'],
})
export class SearchesComponent implements OnInit {
  record: string[] = [];

  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {
    this.record = this.giphyService.getRecord();
  }

}
