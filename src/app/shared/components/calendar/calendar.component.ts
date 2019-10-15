import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'time-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  items: number[];
  offset: number;
  monthName: string;
  currentMonth: number;
  currentYear: number;

  monthNames: Month[];

  dayNames: string[];

  constructor() {}

  ngOnInit() {
    this.currentMonth = new Date().getMonth();
    this.currentYear = new Date().getFullYear();

    this.calculate();

    this.monthNames = this.generateMonthNames();
    this.dayNames = this.generateDayNames();
  }

  private calculate() {
    const numberOfDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    this.monthName = new Date(this.currentYear, this.currentMonth, 1).toLocaleDateString('de-de', {
      month: 'long'
    });

    const day = new Date(this.currentYear, this.currentMonth, 1).getDay(); // 0 is sunnday
    this.offset = ((day + 7) % 8) + 1;

    this.items = [...Array(numberOfDays).keys()].map(i => ++i);
  }

  private generateMonthNames(): Month[] {
    return [...Array(12).keys()].map(i => {
      return {
        index: i,
        name: new Date(2019, i, 1).toLocaleDateString('de-de', { month: 'short' })
      } as Month;
    });
  }

  private generateDayNames(): string[] {
    return [...Array(7).keys()]
      .map(i => i + 1)
      .map(i => new Date(2019, 9, i + 6).toLocaleDateString('de-de', { weekday: 'long' }));
  }

  beforeClick() {
    this.currentMonth = (this.currentMonth - 1) % 12;
    this.calculate();
  }

  nextClick() {
    this.currentMonth = (this.currentMonth + 1) % 12;
    this.calculate();
  }

  selectMonth(m: Month) {
    this.currentMonth = m.index;
    this.calculate();
  }
}

export interface Month {
  index: number;
  name: string;
}
