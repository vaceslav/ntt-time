import { IProject } from 'src/app/shared/swagger';

export const LOAD_PROJECTS = '[PROJECT] LOAD_PROJECTS';
export const LOAD_PROJECTS_SUCCESS = '[PROJECT] LOAD_PROJECTS_SUCCESS';

export class LoadProjects {
  readonly type = LOAD_PROJECTS;
  constructor() {}
}

export class LoadProjectsSuccess {
  readonly type = LOAD_PROJECTS_SUCCESS;
  constructor(public projects: IProject[]) {}
}

export type ProjectAction = LoadProjects | LoadProjectsSuccess;
