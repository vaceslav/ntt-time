import { Component, OnInit } from '@angular/core';

import { ITimeRange } from '../../swagger';
import { AppState } from 'src/app/+state';
import { Store, select } from '@ngrx/store';
import { LoadRanges, AddNewRange, UpdateRange } from 'src/app/+state/actions/time-range.actions';
import { Observable, of } from 'rxjs';
import { selectAllRanges } from 'src/app/+state/selectors/time-range.selector';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'time-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss']
})
export class DayDetailComponent implements OnInit {
  items: number[];
  currentTime = 1 * 60;
  startTopPosition: number;

  ranges: ITimeRange[];
  rangesToDisplay$: Observable<RangeDisplay[]>;

  constructor(private store: Store<AppState>) {
    this.items = [];
    for (let index = 0; index < 24 * 4; index++) {
      this.items.push(index * 15);
    }

    this.rangesToDisplay$ = this.store.pipe(
      select(selectAllRanges),
      map(items => items.map(i => this.convertToDisplay(i)))
    );

    // this.rangesToDisplay$ = of(this.ranges.map(r => this.convertToDisplay(r)));
  }

  ngOnInit() {
    this.startTopPosition = this.convertToPixel(this.currentTime) - 20;

    // this.store.dispatch(new AddNewRange(1, 3 * 60));

    this.store.dispatch(new LoadRanges(1));
  }

  private convertToDisplay(range: ITimeRange): RangeDisplay {
    return {
      top: this.convertToPixel(range.start),
      height: this.convertToPixel(range.end) - this.convertToPixel(range.start),
      range
    };
  }

  private convertToPixel(time: number) {
    return (time / 15) * 41;
  }

  stopRange(range: ITimeRange) {
    range.end = range.start + 2 * 60;

    this.store.dispatch(new UpdateRange(1, range.id, range));
  }

  addRangeClick(startTime: number) {
    this.store.dispatch(new AddNewRange(1, startTime));
  }
}

interface RangeDisplay {
  top: number;
  height: number;
  range: ITimeRange;
}
