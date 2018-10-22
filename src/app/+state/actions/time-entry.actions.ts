import { ITimeEntry } from '../../shared/swagger';

export const LOAD_TIME_ENTRIES = '[TIME_ENTRY] LOAD_TIME_ENTRIES';
export const LOAD_TIME_ENTRIES_SUCCESS = '[TIME_ENTRY] LOAD_TIME_ENTRIES_SUCCESS';
export const CREATE_TIME_ENTRY = '[TIME_ENTRY] Create Entry';
export const CREATE_TIME_ENTRY_SUCCESS = '[TIME_ENTRY] Create Entry Success';
export const UPDATE_TIME_ENTRY = '[TIME_ENTRY] UPDATE_TIME_ENTRY';
export const UPDATE_TIME_ENTRY_SUCCESS = '[TIME_ENTRY] UPDATE_TIME_ENTRY_SUCCESS';
export const DELETE_TIME_ENTRY = '[TIME_ENTRY] DELETE_TIME_ENTRY';
export const DELETE_TIME_ENTRY_SUCCESS = '[TIME_ENTRY] DELETE_TIME_ENTRY_SUCCESS';

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

export class UpdateTimeEntry {
  readonly type = UPDATE_TIME_ENTRY;
  constructor(public payload: ITimeEntry) {}
}

export class UpdateTimeEntrySuccess {
  readonly type = UPDATE_TIME_ENTRY_SUCCESS;
  constructor(public payload: ITimeEntry) {}
}

export class DeleteTimeEntry {
  readonly type = DELETE_TIME_ENTRY;
  constructor(public payload: ITimeEntry) {}
}

export class DeleteTimeEntrySuccess {
  readonly type = DELETE_TIME_ENTRY_SUCCESS;
  constructor(public payload: ITimeEntry) {}
}

export type TimeEntryAction =
  | LoadTimeEntries
  | LoadTimeEntriesSuccess
  | CreateTimeEntry
  | CreateTimeEntrySuccess
  | UpdateTimeEntry
  | UpdateTimeEntrySuccess
  | DeleteTimeEntry
  | DeleteTimeEntrySuccess;
