import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { EntryDetailsContainerComponent } from './components/entry-details-container/entry-details-container.component';
import { EntryExistGuard } from './guards/entry-exist.guard';

const routes: Routes = [
  {
    path: '',
    component: EntryListComponent
  },
  {
    path: ':id',
    component: EntryDetailsContainerComponent,
    canActivate: [EntryExistGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeViewRoutingModule {}
