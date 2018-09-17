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

      const keys = [
        this.swItem.planets, 
        this.swItem.characters, 
        this.swItem.starships, 
        this.swItem.species, 
        this.swItem.vehicles,
        this.swItem.pilots,
        this.swItem.films];

      for (let i=0; i<keys.length; i++) {
        if (keys[i] && keys[i].length > 0) {
          for (let j = 0; j < keys[i].length; j++) {
            const obser = this.apiService.getUrl(keys[i][j]);
            localObs.push(obser);
            obser.subscribe(
              res => {
                if (keys[i] == this.swItem.films) {
                  keys[i][j] = res.title;
                } else {
                  keys[i][j] = res.name;
                }
              });
          }
        }
      }

      if (this.swItem.homeworld) {
          const obser = this.apiService.getUrl(this.swItem.homeworld);
          localObs.push(obser);
          obser.subscribe(
            res => this.swItem.homeworld = res.name
          );
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
