import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { SharedModule } from '../shared/shared.module';
import { TimeViewRoutingModule } from './time-view-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, TimeViewRoutingModule],
  declarations: [EntryListComponent]
})
export class TimeViewModule {}
