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
  entries$: Observable<ITimeEntry[]>;

  constructor(
    private entriesService: EntriesService,
    private timeEntryClient: TimeEntryClient,
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadTimeEntries());

    this.entries$ = this.store.pipe(select(fromStore.selectAll));
  }

  createNewItemClick() {
    const start = new Date();
    const end = new Date();
    end.setHours(start.getHours() + 8);

    const id = 0;

    this.store.dispatch(
      new fromStore.CreateTimeEntry({
        id,
        start,
        end
      })
    );
  }

  deleteClick(item: ITimeEntry) {
    this.store.dispatch(new fromStore.DeleteTimeEntry(item));
  }
}
