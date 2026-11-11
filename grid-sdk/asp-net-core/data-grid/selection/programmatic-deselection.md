---
layout: post
title: Programmatic Row Deselection in ASP.NET Core Grid Component
description: Learn here all about Programmatic Row Deselection in Syncfusion ASP.NET Core Grid component and how to use deselectRow and deselectRows methods.
platform: grid-sdk
control: Programmatic Row Deselection
documentation: ug
---

# Programmatic Row Deselection in ASP.NET Core Grid Component

Programmatic row deselection provides the ability to deselect specific rows in the Grid component through code, without requiring user interaction. This feature is useful when implementing custom selection logic, clearing selections based on business rules, or responding to application events.

> Row selection must be enabled and configured with [selectionSettings.mode](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridSelectionSettings.html#Syncfusion_EJ2_Grids_GridSelectionSettings_Mode) property set to **Row** or **Both** to use deselection methods. Both **Single** and **Multiple** selection types are supported.

## Single row deselection

Single row deselection allows you to deselect a specific row by its index. This is useful when removing an individual row from the current selection.

To deselect a single row, use the `deselectRow` method and pass the row index as an argument. This method triggers the [rowDeselecting](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridRowDeselecting.html) event before deselection and the [rowDeselected](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridRowDeselected.html) event after deselection, allowing you to intercept or respond to the deselection process.

The following example demonstrates single row deselection by clicking a button. When the button is clicked, the row at the specified index is deselected:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
@{
    var data = ViewBag.dataSource;
}

<button id="deselectBtn" class="e-btn">Deselect Row</button>
<ejs-grid id="Grid" dataSource="ViewBag.dataSource" allowPaging="true" actionComplete="onActionComplete">
    <e-grid-selectionsettings type="Multiple" mode="Row"></e-grid-selectionsettings>
    <e-grid-columns>
        <e-grid-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-grid-column>
        <e-grid-column field="CustomerID" headerText="Customer ID" width="150"></e-grid-column>
        <e-grid-column field="ShipCountry" headerText="Ship Country" width="130"></e-grid-column>
        <e-grid-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="100"></e-grid-column>
    </e-grid-columns>
</ejs-grid>

<script type="text/javascript">
    var grid;
    var deselectIndex = 1;
    document.getElementById('deselectBtn').addEventListener('click', function () {
        grid.deselectRow(deselectIndex);
    });
    function onActionComplete(args) {
        if (grid == null) {
            grid = this;
            // Select some rows initially
            grid.selectRows([0, 1, 2]);
        }
    }
</script>
{% endhighlight %}

{% highlight c# tabtitle="deselection.cs" %}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace GridSample.Controllers
{
    public partial class GridController : BaseController
    {
        public IActionResult ProgrammaticDeselectionSingle()
        {
            var OrderData = OrdersDetails.GetAllRecords();
            ViewBag.dataSource = OrderData;
            return View();
        }
    }
}
{% endhighlight %}
{% endtabs %}

## Multiple rows deselection

Multiple rows deselection allows you to deselect multiple rows at once by providing an array of row indexes. This feature is particularly useful when performing batch deselection operations or removing multiple rows from the selection based on specific criteria.

To deselect multiple rows, use the `deselectRows` method and pass an array of row indexes as an argument. For each deselected row, the [rowDeselecting](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridRowDeselecting.html) and [rowDeselected](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridRowDeselected.html) events are triggered in sequence.

The following example demonstrates deselecting multiple rows by clicking a button. When the button is clicked, rows at the specified indexes are deselected from the current selection:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
@{
    var data = ViewBag.dataSource;
}

<button id="deselectBtn" class="e-btn">Deselect Rows 1 and 2</button>
<ejs-grid id="Grid" dataSource="ViewBag.dataSource" allowPaging="true" actionComplete="onActionComplete">
    <e-grid-selectionsettings type="Multiple" mode="Row"></e-grid-selectionsettings>
    <e-grid-columns>
        <e-grid-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-grid-column>
        <e-grid-column field="CustomerID" headerText="Customer ID" width="150"></e-grid-column>
        <e-grid-column field="ShipCountry" headerText="Ship Country" width="130"></e-grid-column>
        <e-grid-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="100"></e-grid-column>
    </e-grid-columns>
</ejs-grid>

<script type="text/javascript">
    var grid;
    document.getElementById('deselectBtn').addEventListener('click', function () {
        grid.deselectRows([1, 2]);
    });
    function onActionComplete(args) {
        if (grid == null) {
            grid = this;
            // Select some rows initially
            grid.selectRows([0, 1, 2, 3]);
        }
    }
</script>
{% endhighlight %}

{% highlight c# tabtitle="deselection.cs" %}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace GridSample.Controllers
{
    public partial class GridController : BaseController
    {
        public IActionResult ProgrammaticDeselectionMultiple()
        {
            var OrderData = OrdersDetails.GetAllRecords();
            ViewBag.dataSource = OrderData;
            return View();
        }
    }
}
{% endhighlight %}
{% endtabs %}

## Deselection events

When rows are deselected programmatically, the Grid component triggers deselection events that allow you to respond to or customize the deselection behavior.

**rowDeselecting** – This event is triggered before a row is deselected. It provides an opportunity to prevent the deselection by setting `args.Cancel` to `true`. This event is useful for implementing custom validation or authorization logic before a row is deselected.

**rowDeselected** – This event is triggered after a row is successfully deselected. Use this event to perform actions or updates when a row is no longer selected.

Both events are triggered for each row in a batch deselection operation. If you cancel deselection in the `rowDeselecting` event, the `rowDeselected` event will not fire for that row.

The following example demonstrates using deselection events. In this example, deselection is prevented for specific rows based on the "CustomerID" value:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
@{
    var data = ViewBag.dataSource;
}

<button id="deselectBtn" class="e-btn">Deselect Rows 0 and 1</button>
<p id="message"></p>
<ejs-grid id="Grid" dataSource="ViewBag.dataSource" allowPaging="true" rowDeselecting="onRowDeselecting" rowDeselected="onRowDeselected">
    <e-grid-selectionsettings type="Multiple" mode="Row"></e-grid-selectionsettings>
    <e-grid-columns>
        <e-grid-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-grid-column>
        <e-grid-column field="CustomerID" headerText="Customer ID" width="150"></e-grid-column>
        <e-grid-column field="ShipCountry" headerText="Ship Country" width="130"></e-grid-column>
        <e-grid-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="100"></e-grid-column>
    </e-grid-columns>
</ejs-grid>

<script type="text/javascript">
    var grid;
    document.getElementById('deselectBtn').addEventListener('click', function () {
        grid.deselectRows([0, 1]);
    });
    function onRowDeselecting(args) {
        if (args.data.CustomerID === 'VINET') {
            args.Cancel = true;
            document.getElementById('message').innerText = 'Deselection prevented for VINET';
        }
    }
    function onRowDeselected(args) {
        document.getElementById('message').innerText = 'Row with OrderID ' + args.data.OrderID + ' has been deselected';
    }
</script>
{% endhighlight %}

{% highlight c# tabtitle="deselection.cs" %}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace GridSample.Controllers
{
    public partial class GridController : BaseController
    {
        public IActionResult ProgrammaticDeselectionEvents()
        {
            var OrderData = OrdersDetails.GetAllRecords();
            ViewBag.dataSource = OrderData;
            return View();
        }
    }
}
{% endhighlight %}
{% endtabs %}

## Deselection behavior with selection persistence

When [persistSelection](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridSelectionSettings.html#Syncfusion_EJ2_Grids_GridSelectionSettings_PersistSelection) is enabled, row selections are maintained across page navigation. Deselecting rows programmatically also updates the persisted selection state accordingly.

The following example demonstrates deselection behavior with selection persistence enabled. When you navigate to different pages and deselect rows, the deselection state is preserved:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
@{
    var data = ViewBag.dataSource;
}

<button id="deselectBtn" class="e-btn">Deselect Current Row</button>
<p id="message"></p>
<ejs-grid id="Grid" dataSource="ViewBag.dataSource" allowPaging="true" actionComplete="onActionComplete">
    <e-grid-selectionsettings type="Multiple" mode="Row" persistSelection="true"></e-grid-selectionsettings>
    <e-grid-pagesettings pageSize="5"></e-grid-pagesettings>
    <e-grid-columns>
        <e-grid-column field="OrderID" headerText="Order ID" textAlign="Right" width="120" isPrimaryKey="true"></e-grid-column>
        <e-grid-column field="CustomerID" headerText="Customer ID" width="150"></e-grid-column>
        <e-grid-column field="ShipCountry" headerText="Ship Country" width="130"></e-grid-column>
        <e-grid-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="100"></e-grid-column>
    </e-grid-columns>
</ejs-grid>

<script type="text/javascript">
    var grid;
    document.getElementById('deselectBtn').addEventListener('click', function () {
        var selectedIndexes = grid.getSelectedRowIndexes();
        if (selectedIndexes.length > 0) {
            grid.deselectRow(selectedIndexes[0]);
            document.getElementById('message').innerText = 'Row at index ' + selectedIndexes[0] + ' has been deselected';
        } else {
            document.getElementById('message').innerText = 'No rows are currently selected';
        }
    });
    function onActionComplete(args) {
        if (grid == null) {
            grid = this;
        }
    }
</script>
{% endhighlight %}

{% highlight c# tabtitle="deselection.cs" %}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace GridSample.Controllers
{
    public partial class GridController : BaseController
    {
        public IActionResult ProgrammaticDeselectionPersist()
        {
            var OrderData = OrdersDetails.GetAllRecords();
            ViewBag.dataSource = OrderData;
            return View();
        }
    }
}
{% endhighlight %}
{% endtabs %}

## Important notes

- **View indexes only** – The `deselectRow` and `deselectRows` methods accept view row indexes, not record keys. This means the indexes refer to the rows visible on the current page. To deselect a row on a different page, you must first navigate to that page using [goToPage](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html#Syncfusion_EJ2_Grids_Grid_GoToPage).

- **No effect during editing** – Programmatic deselection is ignored while the Grid is in edit mode. Complete or cancel the current edit operation before calling these methods.

- **Invalid or non-selected rows** – Passing an invalid index or an index of a row that is not currently selected is silently ignored without triggering errors or events.

- **Comparison with clearRowSelection** – The [clearRowSelection](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.GridSelection.html#Syncfusion_EJ2_Grids_GridSelection_ClearRowSelection) method removes all row selections, while `deselectRow(s)` removes only the specified rows.

- **Array parameter** – The `deselectRows` method accepts an array of row indexes to deselect multiple rows in a single operation.

## See also

- [Row Selection](./row-selection.md)
- [Clear Row Selection](./row-selection.md#clear-row-selection-programmatically)
- [Selection Events](./row-selection.md#row-selection-events)
