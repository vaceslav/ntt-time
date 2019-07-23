import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/+state';
import { AddNewRange, LoadRanges, UpdateRange } from 'src/app/+state/actions/time-range.actions';
import { selectAllRanges } from 'src/app/+state/selectors/time-range.selector';

import { ITimeRange } from '../../swagger';

@Component({
  selector: 'time-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {
  items: number[];
  currentTime = 1 * 60;
  startTopPosition: number;

  rangesToDisplay: RangeDisplay[];
  ranges$: Observable<RangeDisplay[]>;

  constructor(private store: Store<AppState>) {
    this.items = [];
    for (let index = 0; index < 24 * 4; index++) {
      this.items.push(index * 15);
    }

    this.store.dispatch(new LoadRanges(1));

    // this.store.dispatch(new AddNewRange(1, 3 * 60));

    this.ranges$ = this.store.pipe(
      select(selectAllRanges),
      map(ranges => ranges.map(r => this.convertToDisplay(r)))
    );
  }

  ngOnInit() {
    this.startTopPosition = this.convertToPixel(this.currentTime) - 20;
  }

  private convertToDisplay(range: ITimeRange): RangeDisplay {
    return {
      top: this.convertToPixel(range.start),
      height: this.convertToPixel(range.end) - this.convertToPixel(range.start),
      range: range
    };
  }

  private convertToPixel(time: number) {
    return (time / 15) * 41;
  }

  private convertMinutes(pixel: number) {
    return (pixel / 41) * 15;
  }

  stopRange(range: ITimeRange) {
    this.store.dispatch(
      new UpdateRange(1, {
        ...range,
        end: range.start + 2 * 60
      })
    );
  }

  addNewRange(timeInMinutes: number) {
    this.store.dispatch(new AddNewRange(1, timeInMinutes));
  }
}

interface RangeDisplay {
  top: number;
  height: number;
  range: ITimeRange;
}
