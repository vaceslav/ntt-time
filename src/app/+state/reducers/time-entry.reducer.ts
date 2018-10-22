import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ITimeEntry } from 'src/app/shared/swagger';

import * as entry from '../actions/time-entry.actions';

export interface TimeEntryState extends EntityState<ITimeEntry> {
  itemIsCreating: boolean;
}

export const adapter: EntityAdapter<ITimeEntry> = createEntityAdapter<ITimeEntry>();

export const initialState: TimeEntryState = adapter.getInitialState({
  itemIsCreating: false
});

export function timeEntryReducer(state = initialState, action: entry.TimeEntryAction): TimeEntryState {
  switch (action.type) {
    case entry.LOAD_TIME_ENTRIES_SUCCESS:
      return adapter.addAll(action.payload, state);
    case entry.CREATE_TIME_ENTRY:
    case entry.UPDATE_TIME_ENTRY:
      return {
        ...state,
        itemIsCreating: true
      };
    case entry.CREATE_TIME_ENTRY_SUCCESS:
    case entry.UPDATE_TIME_ENTRY_SUCCESS:
      const changes = action.payload;
      const id = changes.id;
      state = adapter.addOne(changes, state); // safe, either create or do nothing
      return {
        ...adapter.updateOne({ id: id, changes: changes }, state),
        itemIsCreating: false
      };
    case entry.DELETE_TIME_ENTRY_SUCCESS:
      return adapter.removeOne(action.payload.id, state);
    default:
      return state;
  }
}

export const getItemIsCreating = (state: TimeEntryState) => state.itemIsCreating;
