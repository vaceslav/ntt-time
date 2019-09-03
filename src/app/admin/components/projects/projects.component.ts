import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/+state';
import { selectAllProjects } from 'src/app/+state/selectors/project.selector';
import { IProject } from 'src/app/shared/swagger';

@Component({
  selector: 'time-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<IProject[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.projects$ = this.store.pipe(select(selectAllProjects));
  }
}
