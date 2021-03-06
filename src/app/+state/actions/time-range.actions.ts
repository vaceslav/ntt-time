import { ITimeRange } from 'src/app/shared/swagger';

export const LOAD_RANGES = '[TIME_RANGE] LOAD_RANGES';
export const LOAD_RANGES_SUCCESS = '[TIME_RANGE] LOAD_RANGES_SUCCESS';

export const ADD_NEW_RANGE = '[TIME_RANGE] ADD_NEW_RANGE';
export const ADD_NEW_RANGE_SUCCESS = '[TIME_RANGE] ADD_NEW_RANGE_SUCCESS';

export const UPDATE_RANGE = '[TIME_RANGE] UPDATE_RANGE';
export const UPDATE_RANGE_SUCCESS = '[TIME_RANGE] UPDATE_RANGE_SUCCESS';

export const DELETE_RANGE = '[TIME_RANGE] DELETE_RANGE';
export const DELETE_RANGE_SUCCESS = '[TIME_RANGE] DELETE_RANGE_SUCCESS';

export class LoadRanges {
  readonly type = LOAD_RANGES;
  constructor(public day: Date) {}
}

export class LoadRangesSuccess {
  readonly type = LOAD_RANGES_SUCCESS;
  constructor(public ranges: ITimeRange[]) {}
}

export class AddNewRange {
  readonly type = ADD_NEW_RANGE;
  constructor(public day: Date, public startTime) {}
}

export class AddNewRangeSuccess {
  readonly type = ADD_NEW_RANGE_SUCCESS;
  constructor(public payload: ITimeRange) {}
}

export class UpdateRange {
  readonly type = UPDATE_RANGE;
  constructor(public range: ITimeRange) {}
}

export class UpdateRangeSuccess {
  readonly type = UPDATE_RANGE_SUCCESS;
  constructor(public range: ITimeRange) {}
}

export class DeleteRange {
  readonly type = DELETE_RANGE;
  constructor(public range: ITimeRange) {}
}

export class DeleteRangeSuccess {
  readonly type = DELETE_RANGE_SUCCESS;
  constructor(public range: ITimeRange) {}
}

export type TimeRangeAction =
  | AddNewRange
  | AddNewRangeSuccess
  | LoadRanges
  | LoadRangesSuccess
  | UpdateRange
  | UpdateRangeSuccess
  | DeleteRange
  | DeleteRangeSuccess;
