import { ITimeRange } from 'src/app/shared/swagger';

export const ADD_NEW_RANGE = '[TIME_RANGE] ADD_NEW_RANGE';
export const ADD_NEW_RANGE_SUCCESS = '[TIME_RANGE] ADD_NEW_RANGE_SUCCESS';

export class AddNewRange {
  readonly type = ADD_NEW_RANGE;
  constructor(public timeEntryId: number, public startTime) {}
}

export class AddNewRangeSuccess {
  readonly type = ADD_NEW_RANGE_SUCCESS;
  constructor(public payload: ITimeRange) {}
}

export type TimeRangeAction = AddNewRange | AddNewRangeSuccess;
