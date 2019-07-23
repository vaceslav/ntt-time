import * as fromRanges from '../reducers/range.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Create the default selectors
export const getRangeState = createFeatureSelector<fromRanges.RangeState>('timeRanges');

// export const {  selectAll, selectTotal } = fromRanges.adapter.getSelectors(getRangeState);

const test = fromRanges.adapter.getSelectors(getRangeState);
export const { selectAll: selectAllRanges, selectTotal: selectTotalRanges } = fromRanges.adapter.getSelectors(
  getRangeState
);
