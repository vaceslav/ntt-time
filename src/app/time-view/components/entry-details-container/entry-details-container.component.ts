import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getSelectedItem, UpdateTimeEntry } from 'src/app/+state';
import { ITimeEntry } from 'src/app/shared/swagger';

@Component({
  selector: 'time-entry-details-container',
  templateUrl: './entry-details-container.component.html',
  styleUrls: ['./entry-details-container.component.scss']
})
export class EntryDetailsContainerComponent implements OnInit {
  item$: Observable<ITimeEntry>;

  constructor(private store: Store<AppState>) {
    this.item$ = this.store.pipe(select(getSelectedItem));
  }

  ngOnInit() {}

  updateItem(item: ITimeEntry) {
    this.store.dispatch(new UpdateTimeEntry(item));
  }
}
