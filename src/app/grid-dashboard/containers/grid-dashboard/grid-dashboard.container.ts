import { Component, OnInit, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';
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

  constructor(
    private readonly _elRef: ElementRef,
    private readonly _renderer2: Renderer2,
  ) {}

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
    this.hidePreview();
  }

  public addItem() {
    const lastItem = this.dashboard[this.dashboard.length - 1];

    this.dashboard.push({
      cols: 2,
      rows: 2,
      x: lastItem ? lastItem.x : 0,
      y: lastItem ? lastItem.y + 2 : 0,
    });
  }

  /**
   * angular-gridster2 library's issue fix.
   * Remove it when issue will be fixed.
   */
  private hidePreview() {
    setTimeout(() => {
      const preview = this._elRef.nativeElement.getElementsByTagName('gridster-preview');
      this._renderer2.setStyle(preview[0], 'display', '');
    });
  }
}
