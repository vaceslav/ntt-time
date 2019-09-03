import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/+state';
import { AddNewRange, DeleteRange, UpdateRange } from 'src/app/+state/actions/time-range.actions';
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

    this.ranges$ = this.store.pipe(
      select(selectAllRanges),
      map(ranges => ranges.map(r => this.convertToDisplay(r)))
    );
  }

  ngOnInit() {
    this.startTopPosition = this.convertToPixel(this.currentTime) - 20;

    // const move$ = fromEvent(document, 'mousemove');
    // const down$ = fromEvent(document, 'mousedown');
    // const up$ = fromEvent(document, 'mouseup');

    // const paints$ = down$.pipe(mergeMap(down => move$.pipe(takeUntil(up$))));

    // paints$.subscribe((d: MouseEvent) => {
    //   console.log('paint: ' + d.clientY);
    // });
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
      new UpdateRange({
        ...range,
        end: range.start + 2 * 60
      })
    );
  }

  addNewRange(timeInMinutes: number) {
    this.store.dispatch(new AddNewRange(timeInMinutes));
  }

  deleteRange(range: ITimeRange) {
    this.store.dispatch(new DeleteRange(range));
  }

  onDragResize($event: CdkDragEnd, range: ITimeRange) {
    const minutes = this.convertMinutes($event.distance.y);

    const toMuch = minutes % 15;

    const minutesToAdd = minutes - toMuch;

    const newRange: ITimeRange = {
      ...range,
      end: range.end + minutesToAdd
    };

    this.store.dispatch(new UpdateRange(newRange));
  }

  onDragMove($event: CdkDragEnd, range: ITimeRange) {
    const minutes = this.convertMinutes($event.distance.y);

    const toMuch = minutes % 15;

    const minutesToAdd = minutes - toMuch;

    const newRange: ITimeRange = {
      ...range,
      start: range.start + minutesToAdd,
      end: range.end + minutesToAdd
    };

    this.store.dispatch(new UpdateRange(newRange));
  }
}

interface RangeDisplay {
  top: number;
  height: number;
  range: ITimeRange;
}
