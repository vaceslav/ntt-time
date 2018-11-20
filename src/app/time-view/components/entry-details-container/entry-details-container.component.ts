import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState, getSelectedItem, LoadTimeEntry, LoadTimeEntries } from '../../../+state';
import { Observable } from 'rxjs';
import { ITimeEntry } from '../../../shared/swagger';

@Component({
  selector: 'time-entry-details-container',
  templateUrl: './entry-details-container.component.html',
  styleUrls: ['./entry-details-container.component.scss']
})
export class EntryDetailsContainerComponent implements OnInit {
  selectedItem$: Observable<ITimeEntry>;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.selectedItem$ = this.store.pipe(select(getSelectedItem));

    this.store.dispatch(new LoadTimeEntries());

    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');

      this.store.dispatch(new LoadTimeEntry(id));
    });
  }
}
