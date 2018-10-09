import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITimeEntry } from '../swagger';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  constructor(private http: HttpClient) {}

  public getItems() {
    return this.http.get<ITimeEntry[]>('api/timeentry');
  }
}
