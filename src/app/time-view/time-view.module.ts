import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { SharedModule } from '../shared/shared.module';
import { TimeViewRoutingModule } from './time-view-routing.module';
import { EntriesService } from '../shared/services/entries.service';

@NgModule({
  imports: [CommonModule, SharedModule, TimeViewRoutingModule],
  providers: [EntriesService],
  declarations: [EntryListComponent]
})
export class TimeViewModule {}
