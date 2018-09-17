import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  tabName = 'films';
  clearInfo: boolean;

  constructor() { }

  ngOnInit() {
  }

  tabChanged(tabName, clearInfo) {
    this.tabName = tabName;
    this.clearInfo = clearInfo;
  }

}
