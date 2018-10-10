import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromStore from './+state';
import { Observable } from 'rxjs';

@Component({
  selector: 'time-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'time';
  isCreating$: Observable<boolean>;
  itemCount$: Observable<number>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit(): void {
    this.isCreating$ = this.store.pipe(select(fromStore.getIstCreatingItem));

    this.itemCount$ = this.store.pipe(select(fromStore.itemCount));
  }
}
