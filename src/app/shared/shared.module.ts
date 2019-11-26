import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { DayDetailComponent } from './components/day-detail/day-detail.component';
import { EntryComponent } from './components/entry/entry.component';
import { HourPipe } from './services/hours.pipe';
import { TimePipe } from './services/time.pipe';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    DragDropModule
  ],
  declarations: [EntryComponent, HourPipe, TimePipe, DayDetailComponent, CalendarComponent],
  exports: [EntryComponent, DayDetailComponent, CalendarComponent]
})
export class SharedModule {}
