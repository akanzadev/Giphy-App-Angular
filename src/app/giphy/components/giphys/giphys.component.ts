import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../../../services/giphy.service';
import { GiphyResponse, Giphy } from '../../../models/giphys.model';

@Component({
  selector: 'app-giphys',
  templateUrl: './giphys.component.html',
  styleUrls: ['./giphys.component.scss'],
})
export class GiphysComponent {
  giphys!: Giphy[];
  giphys$ = this.giphyService.searches$;
  constructor(private giphyService: GiphyService) {}
}
