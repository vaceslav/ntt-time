import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepickerModule, MatIconModule, MatInputModule } from '@angular/material';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { EntryDetailComponent } from 'src/app/shared/components/entry-detail/entry-detail.component';

import { EntryComponent } from './components/entry/entry.component';
import { HourPipe } from './services/hours.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule.forRoot()
  ],
  declarations: [EntryComponent, EntryDetailComponent, HourPipe],
  exports: [EntryComponent, EntryDetailComponent]
})
export class SharedModule {}
