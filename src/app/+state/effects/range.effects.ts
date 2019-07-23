import { Injectable } from '@angular/core';
import { RangeClient, TimeRange } from 'src/app/shared/swagger';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import * as rangeActions from '../actions/time-range.actions';
import { switchMap, map } from 'rxjs/operators';

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
  addNewRange$: Observable<Action> = this.actions$.pipe(
    ofType<rangeActions.AddNewRange>(rangeActions.ADD_NEW_RANGE),
    switchMap(action => {
      return this.rangeClient
        .add(action.timeEntryId, action.startTime)
        .pipe(map(range => new rangeActions.AddNewRangeSuccess(range)));
    })
  );

  @Effect()
  updateRange$: Observable<Action> = this.actions$.pipe(
    ofType<rangeActions.UpdateRange>(rangeActions.UPDATE_RANGE),
    switchMap(action => {
      return this.rangeClient
        .update(action.timeentryid, action.range.id, action.range as TimeRange)
        .pipe(map(range => new rangeActions.UpdateRangeSuccess(range)));
    })
  );

  @Effect()
  deleteRange$: Observable<Action> = this.actions$.pipe(
    ofType<rangeActions.DeleteRange>(rangeActions.DELETE_RANGE),
    switchMap(action => {
      return this.rangeClient
        .delete(action.timeentryid, action.range.id)
        .pipe(map(() => new rangeActions.DeleteRangeSuccess(action.range)));
    })
  );

  constructor(private actions$: Actions, private rangeClient: RangeClient) {}
}
