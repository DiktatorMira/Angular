import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root', })

export class HttpService {
  private api_key: string = '81b10ed9';
  constructor(private http: HttpClient) {}
  getMovies(title: string, type: string): Observable<any> {
    const url = `http://www.omdbapi.com/?apikey=${this.api_key}&s=${title}&type=${type}`;
    return this.http.get(url);
  }
  getMoviesByID(imdbID: string): Observable<any> {
    const url = `http://www.omdbapi.com/?apikey=${this.api_key}&i=${imdbID}`;
    return this.http.get(url);
  }
}
