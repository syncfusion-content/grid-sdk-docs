---
layout: post
title: Highlight Changes in ASP.NET Core Data Grid | Syncfusion
description: Learn how to flash changed cells in the ASP.NET Core Data Grid, set the flash color and duration, flash cells in code, and restyle the highlight with CSS.
platform: grid-sdk
control: Highlight Changes
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Highlight Changes in ASP.NET Core Data Grid

Highlight changes flashes a cell briefly when its value changes. The flash draws attention to the update and then fades out. It suits real-time dashboards, financial apps, and monitoring systems that refresh data often. Users can follow rapid changes without comparing old and new values.

## Enable flashing cells

Set `enableHighlightOnDataChange` to "true" to flash a cell when its value changes. The grid flashes the cell after `setCellValue`, `setRowData`, and edit saves. The property is "false" by default. The `Highlight` module is loaded with the Grid component, so no extra registration is needed.

The grid needs a primary key to find the row. Set `isPrimaryKey` to "true" on one column.

The following example shows a stock dashboard. The **Update prices** button changes the price of three symbols, and each changed cell flashes.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/highlight-changes/highlight-changes-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Highlight.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/highlight-changes/highlight-changes-cs1/highlight.cs %}
{% endhighlight %}
{% endtabs %}

> To skip flashing for one column, set `enableHighlightOnDataChange` to "false" on that column.

## Customize flash settings

Use `highlightSettings` to control how the flash looks. It has these properties:

| Property | Description | Default |
|---|---|---|
| `color` | Sets the flash color. An empty value uses the theme color. | "" |
| `flashDuration` | Sets how long the full color shows, in milliseconds. | "500" |
| `fadeDuration` | Sets how long the color takes to fade out, in milliseconds. | "1000" |

The following example shows a financial monitoring grid. Change the color and durations, select **Apply settings**, and then select **Update prices**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/highlight-changes/highlight-changes-cs2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Highlight.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/highlight-changes/highlight-changes-cs2/highlight.cs %}
{% endhighlight %}
{% endtabs %}

## Programmatically flash cells

Call `flashCells` to flash cells without a data change. The method works even when `enableHighlightOnDataChange` is "false". It accepts these options:

* `rowNodes`: row indexes, row elements, row objects, or row data. Omit it to flash all rows.
* `columns`: field names of the columns to flash. Omit it to flash all columns.
* `highlightSettings`: flash settings for this call only. They override the grid settings.

The following example shows a risk analysis grid. Select a row and use the buttons to flash the row, a column, or specific cells.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/highlight-changes/highlight-changes-cs3/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Highlight.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/highlight-changes/highlight-changes-cs3/highlight.cs %}
{% endhighlight %}
{% endtabs %}

## Customizing highlight appearance

The grid adds the `e-grid-cell-changed` class to a flashed cell and the `e-grid-row-changed` class to a flashed row. It also sets CSS variables on the cell. Override them in CSS to match company branding.

| CSS variable | Purpose |
|---|---|
| `--e-grid-change-highlight-color` | Flash color |
| `--e-grid-highlight-flash-duration` | Flash duration |
| `--e-grid-highlight-fade-duration` | Fade duration |

The following example applies brand colors and timings with CSS.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/highlight-changes/highlight-changes-cs4/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Highlight.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/highlight-changes/highlight-changes-cs4/highlight.cs %}
{% endhighlight %}
{% endtabs %}

## API reference

* `enableHighlightOnDataChange`: flashes cells when their values change.
* `highlightSettings`: sets `color`, `flashDuration`, and `fadeDuration`.
* `flashCells`: flashes rows, columns, or cells from code.
* `setCellValue` and `setRowData`: update data and trigger the flash.

## See also

[Cell](./cell)
