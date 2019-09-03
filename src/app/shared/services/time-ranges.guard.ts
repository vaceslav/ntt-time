import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state';
import { LoadRanges } from 'src/app/+state/actions/time-range.actions';

@Injectable({
  providedIn: 'root'
})
export class TimeRangesGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const timeEntryId = +route.paramMap.get('id');
    this.store.dispatch(new LoadRanges(timeEntryId));

    return true;
  }
}
