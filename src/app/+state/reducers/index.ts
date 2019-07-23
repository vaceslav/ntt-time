import { ActionReducerMap } from '@ngrx/store';

import { projectReducer, ProjectState } from './project.reducer';
import * as fromTimeRange from './range.reducer';
import * as fromTimeEntry from './time-entry.reducer';

export interface AppState {
  readonly timeEntries: fromTimeEntry.TimeEntryState;
  readonly timeRanges: fromTimeRange.RangeState;
  readonly projects: ProjectState;
}

export const reducers: ActionReducerMap<AppState> = {
  timeEntries: fromTimeEntry.timeEntryReducer,
  timeRanges: fromTimeRange.timeRangeReducer,
  projects: projectReducer
};
