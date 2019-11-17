import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GridDashboardModule } from './grid-dashboard/grid-dashboard.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GridDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
