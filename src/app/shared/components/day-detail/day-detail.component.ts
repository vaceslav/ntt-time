import { Component, OnInit } from '@angular/core';

import { ITimeRange } from '../../swagger';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/+state';
import { LoadRanges, AddNewRange, UpdateRange, DeleteRange } from 'src/app/+state/actions/time-range.actions';
import { selectAllRanges } from 'src/app/+state/selectors/time-range.selector';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
      },
      {
        id: 2,
        start: 7 * 60,
        end: 10 * 60,
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
      height: this.convertToPixel(range.end) - this.convertToPixel(range.start),
      range: range
    };
  }

  private convertToPixel(time: number) {
    return (time / 15) * 41;
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

  deleteRange(range: ITimeRange) {
    this.store.dispatch(new DeleteRange(1, range));
  }
}

interface RangeDisplay {
  top: number;
  height: number;
  range: ITimeRange;
}
