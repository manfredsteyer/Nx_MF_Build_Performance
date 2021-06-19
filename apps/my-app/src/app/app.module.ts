import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookingFeatureSearchModule } from '@my-nx-workspace/booking/feature-search';
import { BookingFeatureTicketsModule } from '@my-nx-workspace/booking/feature-tickets';
import { BoardingFeatureManageModule } from '@my-nx-workspace/boarding/feature-manage';
import { BoardingFeatureUpgradeModule } from '@my-nx-workspace/boarding/feature-upgrade';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule,
    
    BoardingFeatureManageModule,
    BoardingFeatureUpgradeModule,
    BookingFeatureTicketsModule,
    BookingFeatureSearchModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
