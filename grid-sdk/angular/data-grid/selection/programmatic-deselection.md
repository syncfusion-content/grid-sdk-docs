---
layout: post
title: Angular Grid Programmatic Row Deselection | Syncfusion
description: Learn how to deselect rows programmatically in Angular Data Grid using deselectRow and deselectRows methods with examples and API details.
platform: grid-sdk
control: Programmatic Row Deselection
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Programmatic Row Deselection in Angular Data Grid

Programmatic row deselection provides the ability to deselect specific rows in the Grid component through code, without requiring user interaction. This feature is useful when implementing custom selection logic, clearing selections based on business rules, or responding to application events.

> Row selection must be enabled and configured with [selectionSettings.mode](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#mode) set to `Row` or `Both` to use deselection methods. Both `Single` and `Multiple` selection types are supported.

## Single row deselection

Single row deselection allows you to deselect a specific row by its index. This is useful when removing an individual row from the current selection.

To deselect a single row, use the [deselectRow](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#deselectrow) method and pass the row index as an argument. This method triggers the [rowDeselecting](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdeselecting) event before deselection and the [rowDeselected](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdeselected) event after deselection, allowing you to intercept or respond to the deselection process.

The following example demonstrates single row deselection by clicking a button. When the button is clicked, the row at the specified index is deselected:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/deselection-row-single-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/deselection-row-single-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/deselection-row-single-cs1" %}

## Multiple rows deselection

Multiple rows deselection allows you to deselect multiple rows at once by providing an array of row indexes. This feature is particularly useful when performing batch deselection operations or removing multiple rows from the selection based on specific criteria.

To deselect multiple rows, use the [deselectRows](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#deselectrows) method and pass an array of row indexes as an argument. The array parameter is required by TypeScript, so always pass an array even when deselecting a single row programmatically using this method. For each deselected row, the [rowDeselecting](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdeselecting) and [rowDeselected](https://ej2.syncfusion.com/angular/documentation/api/grid#rowdeselected) events are triggered in sequence.

The following example demonstrates deselecting multiple rows by clicking a button. When the button is clicked, rows at the specified indexes are deselected from the current selection:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/deselection-row-multiple-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/deselection-row-multiple-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/deselection-row-multiple-cs1" %}

## Deselection events

When rows are deselected programmatically, the Grid component triggers deselection events that allow you to respond to or customize the deselection behavior.

**rowDeselecting** – This event is triggered before a row is deselected. It provides an opportunity to prevent the deselection by setting `args.cancel` to `true`. This event is useful for implementing custom validation or authorization logic before a row is deselected.

**rowDeselected** – This event is triggered after a row is successfully deselected. Use this event to perform actions or updates when a row is no longer selected.

Both events are triggered for each row in a batch deselection operation. If you cancel deselection in the `rowDeselecting` event, the `rowDeselected` event will not fire for that row.

The following example demonstrates using deselection events. In this example, deselection is prevented for specific rows based on the "CustomerID" value:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild } from '@angular/core';
import { data, Order } from './datasource';
import { GridModule, GridComponent, SelectionSettingsModel, RowDeselectingEventArgs, RowDeselectEventArgs } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CommonModule } from '@angular/common';

@Component({
  imports: [GridModule, ButtonModule, CommonModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <div style="padding: 20px 0px">
      <button ejs-button class="sample" (click)="deselectRows()">Deselect Rows 1 and 2</button>
    </div>
    <p id="message">{{ message }}</p>
    <ejs-grid
      #grid
      [dataSource]="data"
      [selectionSettings]="selectionOptions"
      (rowDeselecting)="rowDeselecting($event)"
      (rowDeselected)="rowDeselected($event)">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
        <e-column field="Freight" headerText="Freight" format="C2" width="100"></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class AppComponent implements OnInit {

  public data?: object[];
  public selectionOptions?: SelectionSettingsModel;
  public message: string = '';

  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { mode: 'Row', type: 'Multiple' };
  }

  deselectRows(): void {
    (this.grid as GridComponent).deselectRows([1, 2]);
  }

  rowDeselecting(args: RowDeselectingEventArgs): void {
    // Prevent deselection of rows with specific CustomerID
    if ((args.data as Order).CustomerID === 'VINET') {
      args.cancel = true;
      this.message = 'Deselection prevented for VINET';
    }
  }

  rowDeselected(args: RowDeselectEventArgs): void {
    this.message = `Row with OrderID ${(args.data as Order).OrderID} has been deselected`;
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/deselection-event-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/deselection-event-cs1" %}

## Deselection behavior with selection persistence

When [persistSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selectionSettings#persistselection) is enabled, row selections are maintained across page navigation. Deselecting rows programmatically also updates the persisted selection state accordingly.

The following example demonstrates deselection behavior with selection persistence enabled. When you navigate to different pages and deselect rows, the deselection state is preserved:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% raw %}
import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridModule, GridComponent, SelectionSettingsModel, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CommonModule } from '@angular/common';

@Component({
  imports: [GridModule, ButtonModule, CommonModule],
  standalone: true,
  selector: 'app-root',
  template: `
    <div style="padding: 20px 0px">
      <button ejs-button class="sample" (click)="deselectCurrentRow()">Deselect Current Row</button>
    </div>
    <p id="message">{{ message }}</p>
    <ejs-grid
      #grid
      [dataSource]="data"
      [allowPaging]="true"
      [selectionSettings]="selectionOptions"
      [pageSettings]="pageOptions">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120" isPrimaryKey="true"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
        <e-column field="Freight" headerText="Freight" format="C2" width="100"></e-column>
      </e-columns>
    </ejs-grid>
  `
})
export class AppComponent implements OnInit {

  public data?: object[];
  public selectionOptions?: SelectionSettingsModel;
  public pageOptions?: PageSettingsModel;
  public message: string = '';

  @ViewChild('grid')
  public grid?: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.selectionOptions = { 
      mode: 'Row', 
      type: 'Multiple', 
      persistSelection: true 
    };
    this.pageOptions = { pageSize: 5 };
  }

  deselectCurrentRow(): void {
    const selectedIndexes = (this.grid as GridComponent).getSelectedRowIndexes();
    if (selectedIndexes.length > 0) {
      (this.grid as GridComponent).deselectRow(selectedIndexes[0]);
      this.message = `Row at index ${selectedIndexes[0]} has been deselected`;
    } else {
      this.message = 'No rows are currently selected';
    }
  }
}
{% endraw %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/deselection-persist-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/deselection-persist-cs1" %}

## Important notes

- **View indexes only** – The `deselectRow` and `deselectRows` methods accept view row indexes, not record keys. This means the indexes refer to the rows visible on the current page. To deselect a row on a different page, you must first navigate to that page using [goToPage](https://ej2.syncfusion.com/angular/documentation/api/grid#gotopage).

- **No effect during editing** – Programmatic deselection is ignored while the Grid is in edit mode. Complete or cancel the current edit operation before calling these methods.

- **Invalid or non-selected rows** – Passing an invalid index or an index of a row that is not currently selected is silently ignored without triggering errors or events.

- **Comparison with clearRowSelection** – The [clearRowSelection](https://ej2.syncfusion.com/angular/documentation/api/grid/selection#clearrowselection) method removes all row selections, while `deselectRow(s)` removes only the specified rows.

- **Array parameter required** – The `deselectRows` method requires an array parameter even when deselecting a single row. For example, use `grid.deselectRows([0])` instead of `grid.deselectRows(0)`.

## See also

- [Row Selection](./row-selection.md)
- [Clear Row Selection](./row-selection.md#clear-row-selection-programmatically)
- [Selection Events](./row-selection.md#row-selection-events)
