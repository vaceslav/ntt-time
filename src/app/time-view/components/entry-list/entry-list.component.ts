=import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EntriesService } from '../../../shared/services/entries.service';
import { ITimeEntry, TimeEntryClient } from '../../../shared/swagger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'time-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntryListComponent implements OnInit {
  private _entries: Observable<ITimeEntry[]>;

  public ids$: Observable<number[]>;

  constructor(private timeEntryClient: TimeEntryClient) {}

  ngOnInit() {
    this._entries = this.timeEntryClient.get();

    this.ids$ = this._entries.pipe(
      map(items => items.map(i => i.id)),
      map(ids => ids.filter(i => i % 2))
    );
  }

  public get entries() {
    console.log(new Date());
    return this._entries;
  }

  testClick() {
    this.toString();
  }

  deleteItemClick(item: ITimeEntry) {
    this.timeEntryClient.delete(item.id).subscribe(() => {
      // this.timeEntryClient.get().subscribe(items => {
      //   this._entries = items;
      // });
    });
  }
}
