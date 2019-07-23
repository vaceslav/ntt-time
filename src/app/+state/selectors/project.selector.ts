import * as fromProject from '../reducers/project.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Create the default selectors
export const getProjectState = createFeatureSelector<fromProject.ProjectState>('projects');

export const { selectAll: selectAllProjects, selectTotal: selectTotalProjects } = fromProject.adapter.getSelectors(
  getProjectState
);
