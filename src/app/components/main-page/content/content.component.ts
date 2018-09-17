import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Film } from '../../../models/film';
import { APIService } from '../../../services/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnChanges {
  @Input() tabName: string;
  @Input() clearInfo: boolean;
  swItem: any;
  swStaff: any[];
  searchItem = '';
  loadChild = false;
  listLoad = false;
  searchCondition = 'name';

  constructor(private apiService: APIService) { }

  ngOnChanges() {
    this.clearInfo = false;
    this.apiService.getSWStaff(this.tabName)
    .subscribe(
      res => {
        this.swStaff = res.results;
        this.listLoad = true;
        if (this.tabName == 'films') {
          this.searchCondition = 'title';
          this.swStaff.sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          });
        } else {
          this.searchCondition = 'name';
          this.swStaff.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
        }
      }
    );
  }

  chooseItem(item) {
    this.loadChild = true;
    this.swItem = item;
  }
}
