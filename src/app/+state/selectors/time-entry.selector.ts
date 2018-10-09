import * as fromTimeEntries from '../reducers/time-entry.reducer';
import { createFeatureSelector } from '@ngrx/store';

// Create the default selectors
export const getTimeState = createFeatureSelector<fromTimeEntries.TimeEntryState>('timeEntries');

export const { selectIds, selectEntities, selectAll, selectTotal } = fromTimeEntries.adapter.getSelectors(getTimeState);
