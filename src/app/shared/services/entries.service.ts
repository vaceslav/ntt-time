import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  private _entries = ['entry1', 'entry2', 'entry3'];

  constructor(private http: HttpClient) {}

  public get entries() {
    return this._entries;
  }

  public getItems() {
    return this.http.get<string[]>('api/values');
  }
}
