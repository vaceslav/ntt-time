import * as fromRange from '../reducers/range.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Create the default selectors
export const getRangeState = createFeatureSelector<fromRange.RangeState>('timeRanges');

export const { selectAll: selectAllRanges, selectTotal: selectTotalRanges } = fromRange.adapter.getSelectors(
  getRangeState
);
