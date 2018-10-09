import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ITimeEntry } from 'src/app/shared/swagger';

import * as entry from '../actions/time-entry.actions';

export interface TimeEntryState extends EntityState<ITimeEntry> {}

export const adapter: EntityAdapter<ITimeEntry> = createEntityAdapter<ITimeEntry>();

export const initialState: TimeEntryState = adapter.getInitialState({});

export function timeEntryReducer(state = initialState, action: entry.TimeEntryAction): TimeEntryState {
  switch (action.type) {
    case entry.LOAD_TIME_ENTRIES_SUCCESS:
      return adapter.addAll(action.payload, state);
    case entry.CREATE_TIME_ENTRY_SUCCESS:
      return adapter.addOne(action.payload, state);
    default:
      return state;
  }
}
