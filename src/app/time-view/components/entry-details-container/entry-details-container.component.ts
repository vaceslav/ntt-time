import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState, getSelectedItem, UpdateTimeEntry } from 'src/app/+state';
import { ITimeEntry, RangeClient, TimeEntryClient } from 'src/app/shared/swagger';

@Component({
  selector: 'time-entry-details-container',
  templateUrl: './entry-details-container.component.html',
  styleUrls: ['./entry-details-container.component.scss']
})
export class EntryDetailsContainerComponent implements OnInit {
  item$: Observable<ITimeEntry>;
  day$: Observable<string>;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private timeEntryClient: TimeEntryClient) {
    this.item$ = this.store.pipe(select(getSelectedItem));
  }

  ngOnInit() {
    this.day$ = this.route.paramMap.pipe(map((params: ParamMap) => params.get('day')));
    this.day$.subscribe((d: string) => {
      this.timeEntryClient.getForSpecificDay(new Date(d)).subscribe();
    });
  }

  updateItem(item: ITimeEntry) {
    this.store.dispatch(new UpdateTimeEntry(item));
  }
}
