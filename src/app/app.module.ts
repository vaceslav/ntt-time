import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeViewModule } from './time-view/time-view.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TimeViewModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
