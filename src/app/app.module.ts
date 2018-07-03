import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './components/entry/entry.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';

@NgModule({
  declarations: [AppComponent, EntryComponent, EntryListComponent],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
