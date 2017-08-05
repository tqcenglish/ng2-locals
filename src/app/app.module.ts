import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalesModule } from './locales/locales.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LocalesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
