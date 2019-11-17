import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridsterModule } from 'angular-gridster2';

import { GridDashboardContainer } from './containers';


@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
  ],
  declarations: [
    GridDashboardContainer,
  ],
  exports: [
    GridDashboardContainer,
  ],
})
export class GridDashboardModule { }
