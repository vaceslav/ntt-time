import { Injectable } from '@angular/core';
import { RangeClient } from 'src/app/shared/swagger';
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

  constructor(private actions$: Actions, private rangeClient: RangeClient) {}
}
