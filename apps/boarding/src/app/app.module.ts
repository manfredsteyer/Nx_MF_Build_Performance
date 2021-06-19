import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardingFeatureManageModule } from '@my-nx-workspace/boarding/feature-manage';
import { HttpClientModule } from '@angular/common/http';
import { BoardingFeatureUpgradeModule } from '@my-nx-workspace/boarding/feature-upgrade';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BoardingFeatureManageModule, HttpClientModule, BoardingFeatureUpgradeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
