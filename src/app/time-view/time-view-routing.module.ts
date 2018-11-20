import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { EntryDetailsContainerComponent } from './components/entry-details-container/entry-details-container.component';

const routes: Routes = [
  {
    path: '',
    component: EntryListComponent
  },
  {
    path: ':id',
    component: EntryDetailsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeViewRoutingModule {}
