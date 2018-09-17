import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultFilm } from '../models/result-film';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class APIService {

  constructor(private http: HttpClient) { }

  getSWStaff(listName): Observable<ResultFilm> {
  
    return this.http.get<ResultFilm>('https://swapi.co/api/' + listName);
  }

  getUrl(url) {

    return this.http.get<any>(url);
  }
}
