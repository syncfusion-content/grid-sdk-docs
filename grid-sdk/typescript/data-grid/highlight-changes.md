---
layout: post
title: Highlight Data Changes in TypeScript Data Grid | Syncfusion
description: Learn how to flash changed cells in the TypeScript Data Grid, set the flash color and duration, flash cells in code, and restyle the highlight with CSS.
platform: grid-sdk
control: Highlight Changes
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Highlight Changes in TypeScript Data Grid

Highlight changes flashes a cell briefly when its value changes. The flash draws attention to the update and then fades out. It suits real-time dashboards, financial apps, and monitoring systems that refresh data often. Users can follow rapid changes without comparing old and new values.

## Enable flashing cells

Set `enableHighlightOnDataChange` to "true" to flash a cell when its value changes. The grid flashes the cell after `setCellValue`, `setRowData`, and edit saves. The property is "false" by default. Inject the `Highlight` module before creating the grid. In JavaScript, use `ej.grids.Grid.Inject(ej.grids.Highlight)`. In TypeScript, use `Grid.Inject(Highlight)`.

The grid needs a primary key to find the row. Set `isPrimaryKey` to "true" on one column.

The following example shows a stock dashboard. The "Update prices" button changes the price of three symbols, and each changed cell flashes.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/highlight-changes-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/highlight-changes-cs1" %}

{% endif %}

> To skip flashing for one column, set `enableHighlightOnDataChange` to "false" on that column.

## Customize flash settings

Use `highlightSettings` to control how the flash looks. It has these properties:

| Property | Description |
|----------|-------------|
| `color` | Specifies the color of the highlight. An empty value uses the theme color. |
| `flashDuration` | Specifies the duration, in milliseconds, for which the highlight remains visible before the fade animation starts. The default value is "500". |
| `fadeDuration` | Specifies the duration, in milliseconds, required for the highlight effect to fade back to the normal appearance. The default value is "1000". |

The following example shows a financial monitoring grid. Change the color and durations, select "Apply settings", and then select "Update prices".

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/highlight-changes-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/highlight-changes-cs2" %}

{% endif %}

## Programmatically flash cells

Call `flashCells` to flash cells without a data change. The method works even when `enableHighlightOnDataChange` is "false". It accepts these options:

* `rowNodes`: row indexes, row elements, row objects, or row data. Omit it to flash all rows.
* `columns`: field names of the columns to flash. Omit it to flash all columns.
* `highlightSettings`: flash settings for this call only. They override the grid settings.

The following example shows a risk analysis grid. Select a row and use the buttons to flash the row, a column, or specific cells.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/highlight-changes-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/highlight-changes-cs3" %}

{% endif %}

## Customizing highlight appearance

The grid adds the `e-grid-cell-changed` class to a flashed cell and the `e-grid-row-changed` class to a flashed row. It also sets CSS variables on the cell. Override them in CSS to match company branding.

| Property | Description |
|----------|-------------|
| `--e-grid-change-highlight-color` | Specifies the color of the highlight applied to the changed cell. |
| `--e-grid-highlight-flash-duration` | Specifies the duration for which the highlight remains visible before the fade animation starts. |
| `--e-grid-highlight-fade-duration` | Specifies the duration required for the highlight effect to fade back to the normal appearance. |

The following example applies brand colors and timings with CSS.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/highlight-changes-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/highlight-changes-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/highlight-changes-cs4" %}

{% endif %}

## Related APIs

### Properties

| Property | Description |
|----------|-------------|
| `enableHighlightOnDataChange` | Enables the grid or a column to flash a cell when its value changes. The default value for the grid is "false". |
| `highlightSettings` | Specifies the color, flash duration, and fade duration of the highlight. |
| `isPrimaryKey` | Marks the column that uniquely identifies each row. The grid uses this column to find the row that has changed. |

### Methods

| Method | Description |
|--------|-------------|
| `flashCells` | Flashes the specified rows, columns, or cells without a data change. When the options are omitted, the method flashes all rows and columns. |
| `setCellValue` | Updates the value of a single cell by primary key value and field name. The updated cell flashes when highlighting is enabled. |
| `setRowData` | Updates the data of a row by primary key value. The changed cells in the row flash when highlighting is enabled. |

## See also

[Cell](./cell)
