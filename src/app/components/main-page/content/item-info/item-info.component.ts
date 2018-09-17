import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { forkJoin } from 'rxjs';
import { APIService } from '../../../../services/api.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnChanges {
  @Input() swItem: any;
  loadComplete: boolean;

  constructor(private apiService: APIService) { }

  ngOnChanges(changes: SimpleChanges) {

    if (!this.swItem.clicked) {
      this.loadComplete = false;
      const localObs = [];

      if (this.swItem.planets) {
        for (let j = 0; j < this.swItem.planets.length; j++) {
          const obser = this.apiService.getPlanet(this.swItem.planets[j]);
          localObs.push(obser);
          obser.subscribe(
            res => this.swItem.planets[j] = res.name
          );
        }
      }

      if (this.swItem.characters) {
        for (let j = 0; j < this.swItem.characters.length; j++) {
          const obser = this.apiService.getCharacter(this.swItem.characters[j]);
          localObs.push(obser);
          obser.subscribe(
            res => this.swItem.characters[j] = res.name
          );
        }
      }

      if (this.swItem.starships) {
        for (let j = 0; j < this.swItem.starships.length; j++) {
          const obser = this.apiService.getStarship(this.swItem.starships[j]);
          localObs.push(obser);
          obser.subscribe(
            res => this.swItem.starships[j] = res.name
          );
        }
      }

      if (this.swItem.films) {
        for (let j = 0; j < this.swItem.films.length; j++) {
          const obser = this.apiService.getFilm(this.swItem.films[j]);
          localObs.push(obser);
          obser.subscribe(
            res => this.swItem.films[j] = res.title
          );
        }
      }

      if (this.swItem.homeworld) {
          const obser = this.apiService.getPlanet(this.swItem.homeworld);
          localObs.push(obser);
          obser.subscribe(
            res => this.swItem.homeworld = res.name
          );
      }

      if (this.swItem.pilots && this.swItem.pilots.length > 0) {
        for (let j = 0; j < this.swItem.pilots.length; j++) {
          const obser = this.apiService.getCharacter(this.swItem.pilots[j]);
          localObs.push(obser);
          obser.subscribe(
            res => this.swItem.pilots[j] = res.name
          );
        }
      }

      if (this.swItem.species) {
        for (let j = 0; j < this.swItem.species.length; j++) {
          const obser = this.apiService.getSpecies(this.swItem.species[j]);
          localObs.push(obser);
          obser.subscribe(
            res => this.swItem.species[j] = res.name
          );
        }
      }

      if (this.swItem.vehicles) {
        for (let j = 0; j < this.swItem.vehicles.length; j++) {
          const obser = this.apiService.getVehicle(this.swItem.vehicles[j]);
          localObs.push(obser);
          obser.subscribe(
            res => this.swItem.vehicles[j] = res.name
          );
        }
      }

      forkJoin(localObs).subscribe(
        res => this.loadComplete = true
      );
      this.swItem.clicked = true;
    }
  }

  ngOnInit() { 
  }

}
