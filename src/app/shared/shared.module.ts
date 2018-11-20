import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EntryDetailComponent } from 'src/app/shared/components/entry-detail/entry-detail.component';

import { EntryComponent } from './components/entry/entry.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, MatButtonModule],
  declarations: [EntryComponent, EntryDetailComponent],
  exports: [EntryComponent, EntryDetailComponent]
})
export class SharedModule {}
