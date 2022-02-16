import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap, throwError, BehaviorSubject } from 'rxjs';
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

  searches$ = this.searches.asObservable();

  constructor(private http: HttpClient) {}

  getGifs(searchTerm: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('q', searchTerm);
    queryParams = queryParams.append('limit', '10');
    queryParams = queryParams.append('offset', '0');
    return this.http
      .get<GiphyResponse>(`${this.API_URL}`, {
        params: queryParams,
      })
      .pipe(
        map((data) => data.data),
        tap((data) => {
          this.saveSearchInRecord(searchTerm);
          this.searches.next(data);
          return [...data];
        })
      );
  }

  getRecord() {
    if (localStorage.getItem('record')) {
      this.record = JSON.parse(localStorage.getItem('record')!);
    } else {
      this.record = [];
    }
    return this.record;
  }

  setRecord(historial: string[]) {
    localStorage.setItem('record', JSON.stringify(historial));
  }

  saveSearchInRecord(searchTerm: string) {
    const index = this.record.indexOf(searchTerm.trim().toLocaleLowerCase());
    if (index === -1 && searchTerm !== '') {
      this.record.unshift(searchTerm);
      if (this.record.length > 10) this.record.pop();
      this.setRecord(this.record);
    }
  }
}
