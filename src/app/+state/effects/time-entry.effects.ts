import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { TimeEntryClient, TimeEntry } from '../../shared/swagger';
import * as timeActions from '../actions/time-entry.actions';

@Injectable()
export class TimeEntryEffects {
  @Effect()
  loadAll$: Observable<Action> = this.actions$.ofType<timeActions.LoadTimeEntries>(timeActions.LOAD_TIME_ENTRIES).pipe(
    switchMap(action => {
      return this.timeEntryClient.get().pipe(map(items => new timeActions.LoadTimeEntriesSuccess(items)));
    })
  );

  @Effect()
  createItem$: Observable<Action> = this.actions$
    .ofType<timeActions.CreateTimeEntry>(timeActions.CREATE_TIME_ENTRY)
    .pipe(
      switchMap(action => {
        return this.timeEntryClient
          .create(action.payload as TimeEntry)
          .pipe(map(item => new timeActions.CreateTimeEntrySuccess(item)));
      })
    );

  @Effect()
  deleteItem$: Observable<Action> = this.actions$
    .ofType<timeActions.DeleteTimeEntry>(timeActions.DELETE_TIME_ENTRY)
    .pipe(
      switchMap(action => {
        return this.timeEntryClient
          .delete(action.payload.id)
          .pipe(map(item => new timeActions.DeleteTimeEntrySuccess(action.payload)));
      })
    );

  constructor(private actions$: Actions, private timeEntryClient: TimeEntryClient) {}
}
