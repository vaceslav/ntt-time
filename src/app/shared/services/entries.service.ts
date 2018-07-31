import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  private _entries = ['entry1', 'entry2', 'entry3'];

  constructor() {}

  public get items() {
    return this._entries;
  }
}
