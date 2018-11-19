import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';

import { EntriesService } from '../shared/services/entries.service';
import { SharedModule } from '../shared/shared.module';
import { EntryDetailsContainerComponent } from './components/entry-details-container/entry-details-container.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { TimeViewRoutingModule } from './time-view-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TimeViewRoutingModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ],
  providers: [EntriesService],
  declarations: [EntryListComponent, EntryDetailsContainerComponent]
})
export class TimeViewModule {}
