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
  selectedItem: ITimeEntry;
  isCreating$: Observable<boolean>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadTimeEntries());

    this.entries$ = this.store.pipe(select(fromStore.selectAll));
    this.isCreating$ = this.store.pipe(select(fromStore.getItemIsCreating));
  }

  createNewClick() {
    const start = new Date();
    const end = new Date();
    end.setHours(start.getHours() + 8);

    this.store.dispatch(new fromStore.CreateTimeEntry({ id: 0, start, end, updatedAt: undefined }));
  }

  deleteClick(item: ITimeEntry) {
    this.store.dispatch(new fromStore.DeleteTimeEntry(item));
  }

  updateClick(item: ITimeEntry) {
    this.store.dispatch(new fromStore.UpdateTimeEntry(item));
  }

  selectItem(item: ITimeEntry) {
    this.selectedItem = item;
  }
}
