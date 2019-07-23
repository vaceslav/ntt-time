import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { RangeClient, TimeRange } from 'src/app/shared/swagger';

import * as rangeActions from '../actions/time-range.actions';

@Injectable()
export class RangeEffects {
  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType<rangeActions.LoadRanges>(rangeActions.LOAD_RANGES),
    switchMap(action => {
      return this.rangeClient
        .getAll(action.timeEntryId)
        .pipe(map(ranges => new rangeActions.LoadRangesSuccess(ranges)));
    })
  );

  @Effect()
  createNew$: Observable<Action> = this.actions$.pipe(
    ofType<rangeActions.AddNewRange>(rangeActions.ADD_NEW_RANGE),
    switchMap(action => {
      return this.rangeClient
        .add(action.timeEntryId, action.startTime)
        .pipe(map(range => new rangeActions.AddNewRangeSuccess(range)));
    })
  );

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType<rangeActions.UpdateRange>(rangeActions.UPDATE_RANGE),
    switchMap(action => {
      return this.rangeClient
        .update(action.timeEntryId, action.rangeId, action.entry as TimeRange)
        .pipe(map(range => new rangeActions.UpdateRangeSuccess(range)));
    })
  );

  constructor(private actions$: Actions, private rangeClient: RangeClient) {}
}
