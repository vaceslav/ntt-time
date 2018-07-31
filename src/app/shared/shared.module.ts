import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { EntryComponent } from './components/entry/entry.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [EntryComponent],
  exports: [EntryComponent]
})
export class SharedModule {}
