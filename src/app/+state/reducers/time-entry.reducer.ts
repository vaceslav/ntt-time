import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { TimeEntry } from 'src/app/shared/swagger';

import * as entry from '../actions/time-entry.actions';

export interface TimeEntryState extends EntityState<TimeEntry> {}

export const adapter: EntityAdapter<TimeEntry> = createEntityAdapter<TimeEntry>();

export const initialState: TimeEntryState = adapter.getInitialState({});

export function timeEntryReducer(state = initialState, action: entry.TimeEntryAction): TimeEntryState {
  switch (action.type) {
    case entry.TIME_ENTRIES_LOADED:
      return adapter.addAll(action.payload, state);
    case entry.CREATE_TIME_ENTRY_SUCCESS:
      return adapter.addOne(action.payload, state);
    default:
      return state;
  }
}
