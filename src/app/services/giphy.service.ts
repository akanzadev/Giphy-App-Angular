import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { GiphyResponse, Giphy } from '../models/giphys.model';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private API_KEY = environment.API_KEY;
  private API_URL = `${environment.API_URL}?api_key=${this.API_KEY}`;
  private record: string[] = [];
  private searches = new BehaviorSubject<Giphy[]>([]);
  private last_record = '';

  searches$ = this.searches.asObservable();

  constructor(private http: HttpClient) {
    this.getRecord();
    this.getLastSearch();
  }

  getGifs(searchTerm: string, offset: number = 0, limit: number = 10) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', searchTerm);
    queryParams = queryParams.append('limit', limit);
    queryParams = queryParams.append('offset', offset);
    return this.http
      .get<GiphyResponse>(`${this.API_URL}`, {
        params: queryParams,
      })
      .pipe(
        map((data) => data.data),
        tap((data) => {
          this.last_record = searchTerm;
          this.saveSearchInRecord(searchTerm);
          this.setSearch(data);
          this.searches.next(data);
          return [...data];
        })
      );
  }

  get recordList() {
    return this.record;
  }

  get lastSearch() {
    return this.last_record;
  }

  getRecord() {
    if (localStorage.getItem('record')) {
      this.record = JSON.parse(localStorage.getItem('record')!);
    } else {
      this.record = [];
    }
  }

  getLastSearch() {
    if (localStorage.getItem('searches')) {
      let searches = JSON.parse(localStorage.getItem('searches')!);
      this.searches.next(searches);
    } else {
      this.searches.next([]);
    }
  }

  setRecord(record: string[]) {
    localStorage.setItem('record', JSON.stringify(record));
  }
  setSearch(searches: Giphy[]) {
    localStorage.setItem('searches', JSON.stringify(searches));
  }

  saveSearchInRecord(searchTerm: string) {
    const index = this.record.includes(searchTerm.trim().toLocaleLowerCase());
    if (!index && searchTerm !== '') {
      this.record.unshift(searchTerm);
      if (this.record.length > 10) this.record.pop();
      this.setRecord(this.record);
    }
  }
}
