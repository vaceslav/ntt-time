import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITimeEntry } from '../swagger';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  private _entries = ['entry1', 'entry2', 'entry3'];

  constructor(private http: HttpClient) {}

  public get items() {
    return this._entries;
  }

  public getItems() {
    return this.http.get<ITimeEntry[]>('api/TimeEntry');
  }
}
