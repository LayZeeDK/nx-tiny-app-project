import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { metaReducers, reducers } from './reducers';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
  ],
})
export class AppModule {}
