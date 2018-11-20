import * as fromTimeEntries from '../reducers/time-entry.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Create the default selectors
export const getTimeState = createFeatureSelector<fromTimeEntries.TimeEntryState>('timeEntries');

export const { selectIds, selectEntities, selectAll, selectTotal } = fromTimeEntries.adapter.getSelectors(getTimeState);

export const getItemIsCreating = createSelector(getTimeState, fromTimeEntries.getItemIsCreating);
export const getSelectedId = createSelector(getTimeState, fromTimeEntries.getSelectedId);

export const numberOfItems = createSelector(selectAll, all => all.length);

export const getSelectedItem = createSelector(selectAll, getSelectedId, (allItems, currentId) => {
  if (!allItems || !currentId) {
    return undefined;
  }

  return allItems.find(i => i.id === currentId);
});
