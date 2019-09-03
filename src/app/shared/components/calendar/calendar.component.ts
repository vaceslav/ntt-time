import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  items: number[];
  offset: number;
  mounthName: string;
  currentMounth: number;
  currentYear: number;

  constructor() {}

  ngOnInit() {
    this.currentMounth = new Date().getMonth();
    this.currentYear = new Date().getFullYear();

    this.calculate();
  }

  private calculate() {
    const numberOfDays = new Date(this.currentYear, this.currentMounth + 1, 0).getDate();

    this.mounthName = new Date(this.currentYear, this.currentMounth + 1, 0).toLocaleDateString('de-de', {
      month: 'long'
    });

    const day = new Date(this.currentYear, this.currentMounth).getDay(); // 0 is sunnday
    this.offset = (day + 7) % 8;

    this.items = [...Array(numberOfDays).keys()].map(i => ++i);
  }

  beforeClick() {
    this.currentMounth = (this.currentMounth - 1) % 12;
    this.calculate();
  }

  nextClick() {
    this.currentMounth = (this.currentMounth + 1) % 12;
    this.calculate();
  }
}
