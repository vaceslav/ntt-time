import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../../../shared/services/entries.service';
import { ITimeEntry, TimeEntryClient } from '../../../shared/swagger';

import * as fromStore from '../../../+state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'time-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
  public entries: ITimeEntry[];
  entries$: Observable<ITimeEntry[]>;

  constructor(
    private entriesService: EntriesService,
    private timeEntryClient: TimeEntryClient,
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadTimeEntries());

    //this.entries$ = this.store.pipe(select(fromStore.selectAll));

    this.timeEntryClient.get().subscribe(items => {
      this.entries = items;
    });
  }

  deleteClick() {
    this.timeEntryClient.delete(1).subscribe(() => {
      this.timeEntryClient.get().subscribe(items => {
        this.entries = items;
      });
    });
  }

  createNewClick() {
    const start = new Date();
    const end = new Date();
    end.setHours(start.getHours() + 8);

    this.store.dispatch(
      new fromStore.CreateTimeEntry({
        id: 0,
        start,
        end
      })
    );
  }
}
