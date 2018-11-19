import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { MatDatepickerModule, MatMomentDateModule } from '@coachcare/datepicker';
import { EntryDetailComponent } from 'src/app/shared/components/entry-detail/entry-detail.component';

import { EntryComponent } from './components/entry/entry.component';
import { HourPipe } from './services/hours.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    AmazingTimePickerModule
  ],
  declarations: [EntryComponent, EntryDetailComponent, HourPipe],
  exports: [EntryComponent, EntryDetailComponent]
})
export class SharedModule {}
