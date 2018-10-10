import { ITimeEntry } from '../../shared/swagger';

export const LOAD_TIME_ENTRIES = '[TIME_ENTRY] LOAD_TIME_ENTRIES';
export const LOAD_TIME_ENTRIES_SUCCESS = '[TIME_ENTRY] LOAD_TIME_ENTRIES_SUCCESS';
export const CREATE_TIME_ENTRY = '[TIME_ENTRY] Create Entry';
export const CREATE_TIME_ENTRY_SUCCESS = '[TIME_ENTRY] Create Entry Success';
export const DELTE_TIME_ENTRY = '[TIME_ENTRY] DELTE_TIME_ENTRY';
export const DELTE_TIME_ENTRY_SUCCESS = '[TIME_ENTRY] DELTE_TIME_ENTRY_SUCCESS';

export class LoadTimeEntries {
  readonly type = LOAD_TIME_ENTRIES;
}

export class LoadTimeEntriesSuccess {
  readonly type = LOAD_TIME_ENTRIES_SUCCESS;
  constructor(public payload: ITimeEntry[]) {}
}

export class CreateTimeEntry {
  readonly type = CREATE_TIME_ENTRY;
  constructor(public payload: ITimeEntry) {}
}

export class CreateTimeEntrySuccess {
  readonly type = CREATE_TIME_ENTRY_SUCCESS;
  constructor(public payload: ITimeEntry) {}
}

export class DeleteTimeEntry {
  readonly type = DELTE_TIME_ENTRY;
  constructor(public payload: ITimeEntry) {}
}

export class DeleteTimeEntrySuccess {
  readonly type = DELTE_TIME_ENTRY_SUCCESS;
  constructor(public payload: ITimeEntry) {}
}

export type TimeEntryAction =
  | LoadTimeEntries
  | LoadTimeEntriesSuccess
  | CreateTimeEntry
  | CreateTimeEntrySuccess
  | DeleteTimeEntry
  | DeleteTimeEntrySuccess;
