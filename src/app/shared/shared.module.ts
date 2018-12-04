import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { EntryDetailComponent } from 'src/app/shared/components/entry-detail/entry-detail.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';

import { EntryComponent } from './components/entry/entry.component';
import { HourPipe } from './pipes/hour.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    AmazingTimePickerModule
  ],
  declarations: [EntryComponent, EntryDetailComponent, HourPipe],
  exports: [EntryComponent, EntryDetailComponent, HourPipe]
})
export class SharedModule {}
