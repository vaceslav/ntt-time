import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EntriesService } from '../shared/services/entries.service';
import { SharedModule } from '../shared/shared.module';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { TimeViewRoutingModule } from './time-view-routing.module';
import { MatListModule } from '@angular/material';
import { EntryDetailsContainerComponent } from './components/entry-details-container/entry-details-container.component';

@NgModule({
  imports: [CommonModule, SharedModule, TimeViewRoutingModule, MatListModule],
  providers: [EntriesService],
  declarations: [EntryListComponent, EntryDetailsContainerComponent]
})
export class TimeViewModule {}
