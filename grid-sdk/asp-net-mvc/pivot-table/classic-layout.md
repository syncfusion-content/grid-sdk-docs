---
layout: post
title: Classic Layout in ASP.NET MVC Pivot Table | Syncfusion
description: Learn how the ASP.NET MVC Pivot Table's classic (tabular) layout shows row-axis fields side by side in separate columns for easier reading.
platform: grid-sdk
control: Classic Layout
documentation: ug
---


# Classic Layout in ASP.NET MVC Pivot Table

N> The classic layout is compatible only with relational data sources and operates in both client-side and server-side engines.

The classic layout, also known as the tabular layout, in the Syncfusion<sup style="font-size:70%">&reg;</sup> Pivot Table provides a structured, tabular presentation of data that enhances readability and usability. In this layout, fields in the row axis are displayed side by side in separate columns, making data interpretation and analysis easier. By default, grand totals appear at the end of all rows, while subtotals are placed in a separate row beneath each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse functionality, and more, remain the same as in the compact layout, which serves as the default hierarchical format of the pivot table.

To enable the classic layout, set the [Layout](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewGridSettings.html#Syncfusion_EJ2_PivotView_PivotViewGridSettings_Layout) property in the [PivotViewGridSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewGridSettings.html) of the Pivot Table to **Tabular**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/classic-layout/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ClassicLayout.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/classic-layout/ClassicLayout.cs %}
{% endhighlight %}
{% endtabs %}

![Classic Layout](images/classic-layout.png)

**Limitations**

* Subtotals at the "Top" position are not supported for row subtotals.

## Flat Analytical Table View

By default, the Pivot Table aggregates relational data in the Compact or Tabular layout. The `Flat` layout instead displays the raw, unaggregated relational records in a tabular view without altering the pivot report configuration. It works directly on the [dataSource](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewDataSourceSettings.html) of the `dataSourceSettings` and does not trigger any pivot engine population events.

To enable it, set the [layout](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewGridSettings.html#Syncfusion_EJ2_PivotView_PivotViewGridSettings_Layout) property in `gridSettings` to **Flat** and inject the `FlatLayout` module by calling `ej.pivotview.PivotView.Inject(ej.pivotview.FlatLayout)` in a script block. Configure the flat view independently using [flatSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotView.html), which supports `columns`, `allowSorting`, `sortSettings`, `allowFiltering`, `filterSettings`, `allowAdvancedFiltering`, `searchSettings`, `allowPaging`, `pageSettings`, `enableVirtualization`, `aggregates`, `totalsPosition` and `showColumnChooser`. When the toolbar is enabled, add the `Layout` item to the `toolbar` array to let users switch between the Compact, Tabular and Flat layouts.

N> The Flat layout is supported only for relational data sources; OLAP is not supported. Switching layouts preserves the original pivot report state.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
@using Syncfusion.EJ2.PivotView

@Html.EJS().PivotView("pivotview").Height("350")
    .DataSourceSettings(ds => ds.DataSource((IEnumerable<object>)ViewBag.Data))
    .GridSettings(new PivotViewGridSettings { Layout = GridLayout.Flat })
    .FlatSettings(new PivotViewFlatSettings
    {
        AllowSorting = true,
        AllowFiltering = true,
        AllowPaging = true,
        PageSettings = new PivotViewFlatPageSettings { PageSize = 10 },
        Columns = new List<PivotViewFlatColumn>
        {
            new PivotViewFlatColumn { Field = "Product", HeaderText = "Product", Width = "140" },
            new PivotViewFlatColumn { Field = "Country", HeaderText = "Country", Width = "140" },
            new PivotViewFlatColumn { Field = "Year", HeaderText = "Year", Width = "120" },
            new PivotViewFlatColumn { Field = "Sold", HeaderText = "Units Sold", Width = "120" },
            new PivotViewFlatColumn { Field = "Amount", HeaderText = "Sold Amount", Width = "140" }
        }
    }).Render()
<script>
    ej.pivotview.PivotView.Inject(ej.pivotview.FlatLayout);
</script>
{% endhighlight %}
{% endtabs %}
