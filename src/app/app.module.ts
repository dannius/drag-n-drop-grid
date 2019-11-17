import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridDashboardModule } from './grid-dashboard/grid-dashboard.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GridDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
