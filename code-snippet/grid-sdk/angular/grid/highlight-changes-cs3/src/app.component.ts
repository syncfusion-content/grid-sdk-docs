import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridModule, HighlightService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GridModule],
  providers: [HighlightService],
  standalone: true,
  selector: 'app-root',
  template: `<div class="controls">
                <button class="e-btn" (click)="flashRows()">Flash selected row</button>
                <button class="e-btn" (click)="flashColumn()">Flash Exposure column</button>
                <button class="e-btn" (click)="flashCells()">Flash cells</button>
            </div>
            <ejs-grid #grid id="Grid" [dataSource]='data' height='300' [enableHighlightOnDataChange]="true">
              <e-columns>
                <e-column field='Account' headerText='Account' width=110 [isPrimaryKey]='true'></e-column>
                <e-column field='Desk' headerText='Desk' width=150></e-column>
                <e-column field='Rating' headerText='Rating' width=100></e-column>
                <e-column field='Exposure' headerText='Exposure' width=140 format='C0' textAlign='Right'></e-column>
                <e-column field='Risk' headerText='Risk level' width=110></e-column>
              </e-columns>
            </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
  }

  flashRows(): void {
    const grid = this.grid as GridComponent;
    const rows = grid.getSelectedRowIndexes();
    if (rows.length) {
        grid.flashCells({ rowNodes: rows });
    }
  }
  flashColumn(): void {
    const grid = this.grid as GridComponent;
    grid.flashCells({ columns: ['Exposure'] });
  }
  flashCells(): void {
    const grid = this.grid as GridComponent;
    grid.flashCells({ rowNodes: [0, 2], columns: ['Rating', 'Exposure'] });
  }
}
