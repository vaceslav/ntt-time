import { ITimeRange } from 'src/app/shared/swagger';

export const LOAD_RANGES = '[TIME_RANGE] LOAD_RANGES';
export const LOAD_RANGES_SUCCESS = '[TIME_RANGE] LOAD_RANGES_SUCCESS';

export const ADD_NEW_RANGE = '[TIME_RANGE] ADD_NEW_RANGE';
export const ADD_NEW_RANGE_SUCCESS = '[TIME_RANGE] ADD_NEW_RANGE_SUCCESS';

export class LoadRanges {
  readonly type = LOAD_RANGES;
  constructor(public timeEntryId: number) {}
}

export class LoadRangesSuccess {
  readonly type = LOAD_RANGES_SUCCESS;
  constructor(public ranges: ITimeRange[]) {}
}

export class AddNewRange {
  readonly type = ADD_NEW_RANGE;
  constructor(public timeEntryId: number, public startTime) {}
}

export class AddNewRangeSuccess {
  readonly type = ADD_NEW_RANGE_SUCCESS;
  constructor(public payload: ITimeRange) {}
}

export type TimeRangeAction = AddNewRange | AddNewRangeSuccess | LoadRanges | LoadRangesSuccess;
