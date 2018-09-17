import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultFilm } from '../models/result-film';
import { Film } from '../models/film';
import { Planet } from '../models/planet';
import { Character } from '../models/character';
import { Starship } from '../models/starship';
import { Vehicle } from '../models/vehicle';
import { Species } from '../models/species';


import { HttpClient } from '@angular/common/http';

@Injectable()
export class APIService {

  constructor(private http: HttpClient) { }

  getSWStaff(listName): Observable<ResultFilm> {
  
    return this.http.get<ResultFilm>('https://swapi.co/api/' + listName);
  }

  getPlanet(url) {

    return this.http.get<Planet>(url);
  }

  getFilm(url) {

    return this.http.get<Film>(url);
  }

  getCharacter(url) {

    return this.http.get<Character>(url);
  }

  getStarship(url) {
 
    return this.http.get<Starship>(url);
  }

  getVehicle(url) {

    return this.http.get<Vehicle>(url);
  }

  getSpecies(url) {

    return this.http.get<Species>(url);
  }
}
