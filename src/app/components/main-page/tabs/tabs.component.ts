import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Output() tabChanged = new EventEmitter<string>();
  @Output() clearContent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  tabClicked(tabName, i) {
    this.tabChanged.emit(tabName);
    this.clearContent.emit(true);
    const tab = document.getElementsByClassName('active');
    const activeDiv = document.querySelector('.tab:nth-child(' + i + ')');
    for (let i=0; i<tab.length; i++) {
      tab[i].classList.remove('active');
    }
    activeDiv.classList.add('active');
  }

}
