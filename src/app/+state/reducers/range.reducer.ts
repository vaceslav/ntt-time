import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ITimeRange } from 'src/app/shared/swagger';

import * as actions from '../actions/time-range.actions';

export interface RangeState extends EntityState<ITimeRange> {
  itemIsCreating: boolean;
  selectedId: number;
}

export const adapter: EntityAdapter<ITimeRange> = createEntityAdapter<ITimeRange>();

export const initialState: RangeState = adapter.getInitialState({
  itemIsCreating: false,
  selectedId: undefined,
  totalCount: undefined
});

export function timeRangeReducer(state = initialState, action: actions.TimeRangeAction): RangeState {
  switch (action.type) {
    case actions.LOAD_RANGES_SUCCESS:
      return adapter.addAll(action.ranges, state);
    case actions.UPDATE_RANGE_SUCCESS:
      return adapter.updateOne({ id: action.range.id, changes: action.range }, state);
    case actions.ADD_NEW_RANGE_SUCCESS:
      return adapter.addOne(action.payload, state);
    case actions.DELETE_RANGE_SUCCESS:
      return adapter.removeOne(action.range.id, state);
    default:
      return state;
  }
}

export const getRangeIsCreating = (state: RangeState) => state.itemIsCreating;
export const getSelectedId = (state: RangeState) => state.selectedId;
//export const getTotalCount = (state: RangeState) => state.;
