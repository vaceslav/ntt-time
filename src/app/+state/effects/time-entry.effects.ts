import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { TimeEntryClient, TimeEntry } from '../../shared/swagger';
import * as timeActions from '../actions/time-entry.actions';

@Injectable()
export class TimeEntryEffects {
  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType<timeActions.LoadTimeEntries>(timeActions.LOAD_TIME_ENTRIES),
    switchMap(action => {
      return this.timeEntryClient.getAll().pipe(map(items => new timeActions.LoadTimeEntriesSuccess(items)));
    })
  );

  @Effect()
  loadEntry$: Observable<Action> = this.actions$.pipe(
    ofType<timeActions.LoadTimeEntry>(timeActions.LOAD_TIME_ENTRY),
    switchMap(action => {
      return this.timeEntryClient.get(action.payload).pipe(map(item => new timeActions.LoadTimeEntrySuccess(item)));
    })
  );

  @Effect()
  createItem$: Observable<Action> = this.actions$.pipe(
    ofType<timeActions.CreateTimeEntry>(timeActions.CREATE_TIME_ENTRY),
    switchMap(action => {
      return this.timeEntryClient
        .create(action.payload as TimeEntry)
        .pipe(map(item => new timeActions.CreateTimeEntrySuccess(item)));
    })
  );

  @Effect()
  updateItem$: Observable<Action> = this.actions$.pipe(
    ofType<timeActions.UpdateTimeEntry>(timeActions.UPDATE_TIME_ENTRY),
    switchMap(action => {
      return this.timeEntryClient
        .update(action.payload.id, action.payload as TimeEntry)
        .pipe(map(item => new timeActions.UpdateTimeEntrySuccess(item)));
    })
  );

  @Effect()
  deleteItem$: Observable<Action> = this.actions$.pipe(
    ofType<timeActions.DeleteTimeEntry>(timeActions.DELETE_TIME_ENTRY),
    switchMap(action => {
      return this.timeEntryClient
        .delete(action.payload.id)
        .pipe(map(item => new timeActions.DeleteTimeEntrySuccess(action.payload)));
    })
  );

  constructor(private actions$: Actions, private timeEntryClient: TimeEntryClient) {}
}
