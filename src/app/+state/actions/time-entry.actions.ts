import { TimeEntry } from '../../shared/swagger';

export const LOAD_TIME_ENTRIES = '[TIME_ENTRY] Load All';
export const TIME_ENTRIES_LOADED = '[TIME_ENTRY] Entries Loaded';
export const CREATE_TIME_ENTRY = '[TIME_ENTRY] Create Entry';
export const CREATE_TIME_ENTRY_SUCCESS = '[TIME_ENTRY] Create Entry Success';

export class LoadTimeEntries {
  readonly type = LOAD_TIME_ENTRIES;
}

export class TimeEntriesLoaded {
  readonly type = TIME_ENTRIES_LOADED;
  constructor(public payload: TimeEntry[]) {}
}

export class CreateTimeEntry {
  readonly type = CREATE_TIME_ENTRY;
  constructor(public payload: TimeEntry) {}
}

export class CreateTimeEntrySuccess {
  readonly type = CREATE_TIME_ENTRY_SUCCESS;
  constructor(public payload: TimeEntry) {}
}

export type TimeEntryAction = LoadTimeEntries | TimeEntriesLoaded | CreateTimeEntry | CreateTimeEntrySuccess;
