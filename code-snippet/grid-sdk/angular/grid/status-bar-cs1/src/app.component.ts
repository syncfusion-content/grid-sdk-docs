import { Component } from '@angular/core';
import { FilterService, StatusBarService, FilterSettingsModel, GridModule, SelectionService, SortService } from '@syncfusion/ej2-angular-grids';
import { groceryProducts } from './datasource';

@Component({
  imports: [GridModule],
  providers: [FilterService, StatusBarService, SelectionService, SortService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-grid [dataSource]='data' [enableStatusBar]='true' [statusBarSettings]='statusBarSettings'
      [allowFiltering]='true' [filterSettings]='filterSettings' [allowSorting]='true'
      [allowSelection]='true' [selectionSettings]='selectionSettings' height='320px'>
      <e-columns>
        <e-column field='ProductID' headerText='Product ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>
        <e-column field='ProductName' headerText='Product Name' width='160'></e-column>
        <e-column field='Category' headerText='Category' width='140'></e-column>
        <e-column field='PurchasePrice' headerText='Purchase Price' width='140' format='C2' textAlign='Right'></e-column>
        <e-column field='SellingPrice' headerText='Selling Price' width='140' format='C2' textAlign='Right'></e-column>
        <e-column field='AvailableStock' headerText='Available Stock' width='150' textAlign='Right'></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class AppComponent {
  public data = groceryProducts;
  public filterSettings: FilterSettingsModel = { type: 'Excel' };
  public selectionSettings = { mode: 'Row', type: 'Multiple' };
  public statusBarSettings = {
    items: [
      { key: 'totalRows', type: 'TotalRowCount', position: 'Left' },
      { key: 'filteredRows', type: 'FilteredRowCount', position: 'Left' },
      { key: 'filteredTotalRows', type: 'TotalAndFilteredRowCount', position: 'Right' },
      { key: 'selectedCount', type: 'SelectedRowCount', position: 'Center' }
    ]
  };
}
