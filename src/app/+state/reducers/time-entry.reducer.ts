import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ITimeEntry } from 'src/app/shared/swagger';

import * as entry from '../actions/time-entry.actions';

export interface TimeEntryState extends EntityState<ITimeEntry> {
  creatingItem: boolean;
}

export const adapter: EntityAdapter<ITimeEntry> = createEntityAdapter<ITimeEntry>();

export const initialState: TimeEntryState = adapter.getInitialState({
  creatingItem: false
});

export function timeEntryReducer(state = initialState, action: entry.TimeEntryAction): TimeEntryState {
  switch (action.type) {
    case entry.LOAD_TIME_ENTRIES_SUCCESS:
      return adapter.addAll(action.payload, state);
    case entry.CREATE_TIME_ENTRY:
      return {
        ...state,
        creatingItem: true
      };
    case entry.CREATE_TIME_ENTRY_SUCCESS:
      return {
        ...adapter.addOne(action.payload, state),
        creatingItem: false
      };
    case entry.DELTE_TIME_ENTRY_SUCCESS:
      return adapter.removeOne(action.payload.id, state);
    default:
      return state;
  }
}

export const getIstCreatingItem = (state: TimeEntryState) => state.creatingItem;
