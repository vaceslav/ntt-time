import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IProject } from 'src/app/shared/swagger';

import * as projectActions from '../actions/project.actions';

export interface ProjectState extends EntityState<IProject> {}

export const adapter: EntityAdapter<IProject> = createEntityAdapter<IProject>();

export const initialState: ProjectState = adapter.getInitialState();

export function projectReducer(state = initialState, action: projectActions.ProjectAction): ProjectState {
  switch (action.type) {
    case projectActions.LOAD_PROJECTS_SUCCESS:
      return adapter.addAll(action.projects, state);
    default:
      return state;
  }
}
