import { Component, OnInit } from '@angular/core';

import { DummyData } from './dummy-data';

@Component({
  selector: 'time-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'time';
  public items: string[];

  ngOnInit(): void {
    this.items = DummyData;
  }

  addItemClick() {
    this.items.push('Item' + Math.random());
  }
}
