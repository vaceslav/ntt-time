import * as fromTimeEntries from '../reducers/time-entry.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { all } from 'q';

// Create the default selectors
export const getTimeState = createFeatureSelector<fromTimeEntries.TimeEntryState>('timeEntries');

export const { selectIds, selectEntities, selectAll, selectTotal } = fromTimeEntries.adapter.getSelectors(getTimeState);

export const getIstCreatingItem = createSelector(getTimeState, fromTimeEntries.getIstCreatingItem);

export const itemCount = createSelector(selectAll, allItems => allItems.length);
