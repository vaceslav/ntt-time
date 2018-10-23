import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../+state';

@Injectable({
  providedIn: 'root'
})
export class EntryExistGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = next.paramMap.get('id');
    debugger;
    return true;
  }

  constructor(private store: Store<AppState>) {}
}
