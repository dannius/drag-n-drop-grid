import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { gridOptions } from './grid-options';

@Component({
  selector: 'app-grid-dashboard',
  templateUrl: './grid-dashboard.container.html',
  styleUrls: ['./grid-dashboard.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridDashboardContainer implements OnInit {

  public options: GridsterConfig;
  public dashboard: Array<GridsterItem>;

  public ngOnInit() {
    this.options = gridOptions;

    this.dashboard = [
      { cols: 2, rows: 2, y: 0, x: 0 },
      { cols: 2, rows: 2, y: 2, x: 0 },
    ];
  }

  public changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  public removeItem($event, itemIndex: number) {
    $event.preventDefault();
    $event.stopPropagation();

    this.dashboard.splice(itemIndex, 1);
  }

  public addItem() {
    this.dashboard.push({ cols: 2, rows: 2, x: 0, y: 0 });
  }
}
