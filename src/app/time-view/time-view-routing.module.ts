import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { EntryDetailsContainerComponent } from './components/entry-details-container/entry-details-container.component';
import { EntryExistGuard } from './guards/entry-exist.guard';
import { CalendarComponent } from '../shared/components/calendar/calendar.component';
import { CalendarStartComponent } from '../shared/components/calendar-start/calendar-start.component';
import { TimeRangesGuard } from '../shared/services/time-ranges.guard';

const routes: Routes = [
  {
    path: '',
    component: EntryListComponent
  },
  {
    path: 'calendar',
    component: CalendarStartComponent,
    children: [
      {
        path: '',
        component: CalendarComponent
      },
      {
        path: ':day',
        component: EntryDetailsContainerComponent,
        canActivate: [TimeRangesGuard]
      }
    ]
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
