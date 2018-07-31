import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './components/entry/entry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EntryComponent],
  exports: [EntryComponent]
})
export class SharedModule { }
