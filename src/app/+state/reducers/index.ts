import { ActionReducerMap } from '@ngrx/store';

import * as fromTimeEntry from './time-entry.reducer';
import * as fromTimeRange from './range.reducer';

export interface AppState {
  readonly timeEntries: fromTimeEntry.TimeEntryState;
  readonly timeRanges: fromTimeRange.RangeState;
}

export const reducers: ActionReducerMap<AppState> = {
  timeEntries: fromTimeEntry.timeEntryReducer,
  timeRanges: fromTimeRange.timeRangeReducer
};
