import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookingFeatureSearchModule } from '@my-nx-workspace/booking/feature-search';
import { HttpClientModule } from '@angular/common/http';
import { BookingFeatureTicketsModule } from '@my-nx-workspace/booking/feature-tickets';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BookingFeatureSearchModule, HttpClientModule, BookingFeatureTicketsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
