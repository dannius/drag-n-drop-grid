import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridsterModule } from 'angular-gridster2';

import { GridDashboardContainer } from './containers';
import { MaterialModule } from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    MaterialModule,
  ],
  declarations: [
    GridDashboardContainer,
  ],
  exports: [
    GridDashboardContainer,
  ],
})
export class GridDashboardModule { }
