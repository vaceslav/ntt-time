import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from './+state';

@Component({
  selector: 'time-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'time';
  numberOfItems$: Observable<number>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit(): void {
    this.numberOfItems$ = this.store.pipe(select(fromStore.numberOfItems));
  }
}
