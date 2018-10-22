import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EntriesService } from '../shared/services/entries.service';
import { SharedModule } from '../shared/shared.module';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { TimeViewRoutingModule } from './time-view-routing.module';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, SharedModule, TimeViewRoutingModule, MatListModule],
  providers: [EntriesService],
  declarations: [EntryListComponent]
})
export class TimeViewModule {}
