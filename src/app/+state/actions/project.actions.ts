import { IProject, Project } from 'src/app/shared/swagger';

export const LOAD_PROJECTS = '[PROJECT] LOAD_PROJECTS';
export const LOAD_PROJECTS_SUCCESS = '[PROJECT] LOAD_PROJECTS_SUCCESS';

export const ADD_PROJECT = '[PROJECT] ADD_PROJECT';
export const ADD_PROJECT_SUCCESS = '[PROJECT] ADD_PROJECT_SUCCESS';

export class LoadProjects {
  readonly type = LOAD_PROJECTS;
  constructor() {}
}

export class LoadProjectsSuccess {
  readonly type = LOAD_PROJECTS_SUCCESS;
  constructor(public projects: IProject[]) {}
}

export class AddProject {
  readonly type = ADD_PROJECT;
  constructor(public name: string) {}
}

export class AddProjectSuccess {
  readonly type = ADD_PROJECT_SUCCESS;
  constructor(public project: Project) {}
}

export type ProjectAction = LoadProjects | LoadProjectsSuccess | AddProject | AddProjectSuccess;
