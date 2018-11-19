import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, LoadTimeEntry } from '../../+state';

@Injectable({
  providedIn: 'root'
})
export class EntryExistGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = +next.paramMap.get('id');

    this.store.dispatch(new LoadTimeEntry(id));

    return true;
  }

  constructor(private store: Store<AppState>) {}
}
