import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { TimeEntryClient } from '../../shared/swagger';
import * as timeActions from '../actions/time-entry.actions';

@Injectable()
export class TimeEntryEffects {
  //   @Effect()
  //   loadAll$: Observable<Action> = this.actions$.ofType<timeActions.LoadTimeEntries>(timeActions.LOAD_TIME_ENTRIES).pipe(
  //     switchMap(action => {
  //       return this.timeEntryClient.get().pipe(map(items => new timeActions.LoadTimeEntriesSuccess(items)));
  //     })
  //   );

  constructor(private actions$: Actions, private timeEntryClient: TimeEntryClient) {}
}
