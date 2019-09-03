import { Injectable } from '@angular/core';
import { RangeClient, TimeRange } from 'src/app/shared/swagger';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';

import * as rangeActions from '../actions/time-range.actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { AppState } from '../reducers';

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
    withLatestFrom(this.store),
    switchMap(([action, state]) => {
      const timeEntryId = state.timeEntries.selectedId;
      return this.rangeClient
        .add(timeEntryId, action.startTime)
        .pipe(map(range => new rangeActions.AddNewRangeSuccess(range)));
    })
  );

  @Effect()
  updateRange$: Observable<Action> = this.actions$.pipe(
    ofType<rangeActions.UpdateRange>(rangeActions.UPDATE_RANGE),
    withLatestFrom(this.store),
    switchMap(([action, state]) => {
      const timeEntryId = state.timeEntries.selectedId;
      return this.rangeClient
        .update(timeEntryId, action.range.id, action.range as TimeRange)
        .pipe(map(range => new rangeActions.UpdateRangeSuccess(range)));
    })
  );

  @Effect()
  deleteRange$: Observable<Action> = this.actions$.pipe(
    ofType<rangeActions.DeleteRange>(rangeActions.DELETE_RANGE),
    withLatestFrom(this.store),
    switchMap(([action, state]) => {
      const timeEntryId = state.timeEntries.selectedId;
      return this.rangeClient
        .delete(timeEntryId, action.range.id)
        .pipe(map(() => new rangeActions.DeleteRangeSuccess(action.range)));
    })
  );

  constructor(private actions$: Actions, private rangeClient: RangeClient, private store: Store<AppState>) {}
}
