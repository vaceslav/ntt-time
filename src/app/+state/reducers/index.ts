import { ActionReducerMap } from '@ngrx/store';

import * as fromTimeEntry from './time-entry.reducer';

export interface AppState {
  readonly timeEntries: fromTimeEntry.TimeEntryState;
}

export const reducers: ActionReducerMap<AppState> = {
  timeEntries: fromTimeEntry.timeEntryReducer
};
