import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EntryListComponent } from './components/entry-list/entry-list.component';

const routes: Routes = [
  {
    path: '',
    component: EntryListComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class TimeViewRoutingModule {}
