---
layout: post
title: Classic Layout in ASP.NET Core Pivot Table | Syncfusion
description: Learn how the ASP.NET Core Pivot Table's classic (tabular) layout shows row-axis fields side by side in separate columns for easier reading.
platform: grid-sdk
control: Classic Layout
documentation: ug
---


# Classic Layout in ASP.NET Core Pivot Table

N> The classic layout is compatible only with relational data sources and operates in both client-side and server-side engines.

The classic layout, also known as the tabular layout, in the Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table provides a structured, tabular presentation of data that enhances readability and usability. In this layout, fields in the row axis are displayed side by side in separate columns, making data interpretation and analysis easier. By default, grand totals appear at the end of all rows, while subtotals are placed in a separate row beneath each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse functionality, and more, remain the same as in the compact layout, which serves as the default hierarchical format of the pivot table.

To enable the classic layout, set the [layout](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PivotView.PivotViewGridSettings.html#Syncfusion_EJ2_PivotView_PivotViewGridSettings_Layout) property in the [e-gridSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PivotView.PivotViewGridSettings.html) tag to **Tabular**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/classic-layout/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ClassicLayout.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/classic-layout/ClassicLayout.cs %}
{% endhighlight %}
{% endtabs %}



![Classic Layout](images/classic-layout.png)

**Limitations**

* Subtotals at the "Top" position are not supported for row subtotals.

## Flat Analytical Table View

By default, the Pivot Table aggregates relational data in the Compact or Tabular layout. The `Flat` layout instead displays the raw, unaggregated relational records in a tabular view without altering the pivot report configuration. It works directly on the [dataSource](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PivotView.PivotViewDataSourceSettings.html) of the `dataSourceSettings` and does not trigger any pivot engine population events.

To enable it, set the [layout](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PivotView.PivotViewGridSettings.html#Syncfusion_EJ2_PivotView_PivotViewGridSettings_Layout) property in `gridSettings` to **Flat** and inject the `FlatLayout` module by calling `ej.pivotview.PivotView.Inject(ej.pivotview.FlatLayout)` in a script block. Configure the flat view independently using [flatSettings](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PivotView.PivotView.html), which supports `columns`, `allowSorting`, `sortSettings`, `allowFiltering`, `filterSettings`, `allowAdvancedFiltering`, `searchSettings`, `allowPaging`, `pageSettings`, `enableVirtualization`, `aggregates`, `totalsPosition` and `showColumnChooser`. When the toolbar is enabled, add the `Layout` item to the `toolbar` array to let users switch between the Compact, Tabular and Flat layouts.

N> The Flat layout is supported only for relational data sources; OLAP is not supported. Switching layouts preserves the original pivot report state.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
<ejs-pivotview id="pivotview" height="350">
    <e-datasourcesettings dataSource="@ViewBag.Data"></e-datasourcesettings>
    <e-gridSettings layout="Flat"></e-gridSettings>
    <e-flatSettings allowSorting="true" allowFiltering="true" allowPaging="true">
        <e-flatpagesettings pageSize="10"></e-flatpagesettings>
        <e-flatcolumns>
            <e-flatcolumn field="Product" headerText="Product" width="140"></e-flatcolumn>
            <e-flatcolumn field="Country" headerText="Country" width="140"></e-flatcolumn>
            <e-flatcolumn field="Year" headerText="Year" width="120"></e-flatcolumn>
            <e-flatcolumn field="Sold" headerText="Units Sold" width="120"></e-flatcolumn>
            <e-flatcolumn field="Amount" headerText="Sold Amount" width="140"></e-flatcolumn>
        </e-flatcolumns>
    </e-flatSettings>
</ejs-pivotview>
<script>
    ej.pivotview.PivotView.Inject(ej.pivotview.FlatLayout);
</script>
{% endhighlight %}
{% endtabs %}
