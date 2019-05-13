import { Component, OnInit } from '@angular/core';

import { ITimeRange } from '../../swagger';

@Component({
  selector: 'time-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {
  items: number[];
  currentTime = 5 * 60;
  startTopPosition: number;

  ranges: ITimeRange[];
  rangesToDisplay: RangeDisplay[];

  constructor() {
    this.items = [];
    for (let index = 0; index < 24 * 4; index++) {
      this.items.push(index * 15);
    }

    this.ranges = [
      {
        id: 0,
        start: 1 * 60,
        end: 2.25 * 60,
        updatedAt: undefined
      },
      {
        id: 0,
        start: 3 * 60,
        end: 5 * 60,
        updatedAt: undefined
      }
    ];

    this.rangesToDisplay = this.ranges.map(r => this.convertToDisplay(r));
  }

  ngOnInit() {
    this.startTopPosition = this.convertToPixel(this.currentTime) - 20;
  }

  private convertToDisplay(range: ITimeRange): RangeDisplay {
    return {
      top: this.convertToPixel(range.start),
      height: this.convertToPixel(range.end) - this.convertToPixel(range.start)
    };
  }

  private convertToPixel(time: number) {
    return (time / 15) * 41;
  }
}

interface RangeDisplay {
  top: number;
  height: number;
}
