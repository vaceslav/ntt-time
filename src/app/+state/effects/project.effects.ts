import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ProjectClient } from '../../shared/swagger';
import * as projectActions from '../actions/project.actions';

@Injectable()
export class ProjectEffects {
  @Effect()
  loadAll$: Observable<Action> = this.actions$.pipe(
    ofType<projectActions.LoadProjects>(projectActions.LOAD_PROJECTS),

    switchMap(action => {
      return this.projectClient.getAll().pipe(map(items => new projectActions.LoadProjectsSuccess(items)));
    })
  );

  constructor(private actions$: Actions, private projectClient: ProjectClient) {}
}
