import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridModule, HighlightService } from '@syncfusion/ej2-angular-grids';

@Component({
  imports: [GridModule],
  providers: [HighlightService],
  standalone: true,
  selector: 'app-root',
  template: `<div class="controls">
                <label>Color <input #color type="color" value="#ffb347"></label>
                <label>Flash duration (ms) <input #flash type="number" value="500" min="0" step="100"></label>
                <label>Fade duration (ms) <input #fade type="number" value="1000" min="0" step="100"></label>
                <button class="e-btn" (click)="applySettings(color.value, flash.value, fade.value)">Apply settings</button>
                <button class="e-btn" (click)="updatePrices()">Update prices</button>
            </div>
            <ejs-grid #grid id="Grid" [dataSource]='data' height='300' [enableHighlightOnDataChange]="true" [highlightSettings]="highlightSettings">
              <e-columns>
                <e-column field='Symbol' headerText='Symbol' width=110 [isPrimaryKey]='true'></e-column>
                <e-column field='Company' headerText='Company' width=180></e-column>
                <e-column field='Price' headerText='Price' width=120 format='C2' textAlign='Right'></e-column>
                <e-column field='Volume' headerText='Volume' width=140 format='N0' textAlign='Right'></e-column>
              </e-columns>
            </ejs-grid>`
})
export class AppComponent implements OnInit {

  public data?: object[];
  public highlightSettings = { color: '#ffb347', flashDuration: 500, fadeDuration: 1000 };
  @ViewChild('grid') public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
  }

  applySettings(color: string, flash: string, fade: string): void {
    const grid = this.grid as GridComponent;
    grid.highlightSettings.color = color;
    grid.highlightSettings.flashDuration = Number(flash);
    grid.highlightSettings.fadeDuration = Number(fade);
  }
  updatePrices(): void {
    const grid = this.grid as GridComponent;
    const symbols = ['AAPL', 'NVDA', 'TSLA'];
    symbols.forEach((symbol) => {
        grid.setCellValue(symbol, 'Price', +(100 + Math.random() * 150).toFixed(2));
    });
  }
}
