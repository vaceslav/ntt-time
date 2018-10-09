import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { effects } from './+state';
import { reducers } from './+state/reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { API_BASE_URL } from './shared/swagger';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule
  ],
  providers: [
    {
      provide: API_BASE_URL,
      useValue: '',
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
