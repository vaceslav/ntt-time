import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { EntryDetailComponent } from 'src/app/shared/components/entry-detail/entry-detail.component';

import { EntryComponent } from './components/entry/entry.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, MatButtonModule, MatIconModule, FlexLayoutModule],
  declarations: [EntryComponent, EntryDetailComponent],
  exports: [EntryComponent, EntryDetailComponent]
})
export class SharedModule {}
