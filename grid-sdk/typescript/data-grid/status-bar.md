---
layout: post
title: TypeScript Grid Status Bar | Syncfusion
description: Learn how to configure Status Bar panels in the TypeScript Grid, including built-in panels, aggregates, value formatting, custom panels, and runtime access.
control: Status Bar
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Status Bar in TypeScript Data Grid

The TypeScript Grid provides a configurable Status Bar area that displays real-time grid information. It can show built-in panels for row counts, selected row count, and selected cell aggregates, and it also supports custom panels.

The Status Bar updates automatically when grid data, filtering, or selection changes. You can access a rendered panel at runtime by using `getStatusPanel`.

## Enable Status Bar

Enable the Status Bar by setting `enableStatusBar` to **true** and configure built-in panels through `statusBarSettings.items`.

The following example shows the basic Status Bar layout:

- `TotalRowCount` on the **Left**
- `FilteredRowCount` on the **Left**
- `TotalAndFilteredRowCount` on the **Right**
- `SelectedRowCount` in the **Center**

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/status-bar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/status-bar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/status-bar-cs1" %}

## Built-in Panels

The following example demonstrates built-in panel rendering and panel placement.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/status-bar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/status-bar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/status-bar-cs2" %}

The Status Bar renders built-in panels by reading each item in `statusBarSettings.items`.

### Status Bar Item Rendering

The Status Bar renders built-in panels by reading each item in `statusBarSettings.items`.

### Status Bar Item Rendering

1. Iterate through `statusBarSettings.items`.
2. Read each item's `type`, `position`, `key`, and `statusPanelParams`.
3. Create the corresponding status panel component.

### Position Handling

- If `position === 'Left'`, render the panel in the left section.
- If `position === 'Center'`, render the panel in the center section.
- If `position === 'Right'`, render the panel in the right section.

### Key Registration

Each panel is registered using the configured `key`, which enables runtime access through `getStatusPanel(key)`.

### Built-in Panel Rendering

- `TotalRowCount` Panel: displays the total number of rows in the grid.
- `FilteredRowCount` Panel: displays the number of rows after filtering.
- `TotalAndFilteredRowCount` Panel: displays both total and filtered row counts.
- `SelectedRowCount` Panel: displays the number of selected rows.
- `SelectedCellAggregates` Panel: displays aggregate values for selected cells.

## Aggregates Panel

The `SelectedCellAggregates` panel displays aggregate values for selected numeric cells. Enable cell selection, select multiple cells, and the Status Bar updates with values such as Sum, Average, Min, Max, or Count.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/status-bar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/status-bar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/status-bar-cs3" %}

## Value Formatting

Status Bar panels support value formatting through `valueFormatter`. You can use it to format numbers, currency, and percentage values.

For example:

- `1000` → `1K`
- `1500000` → `1.5M`
- `$1,500.00`
- `85.25%`

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/status-bar-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/status-bar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/status-bar-cs4" %}

## Custom Panel

Create a custom Status Bar panel when you need to display application-specific information. Register the custom panel in `statusBarSettings.items` and render your own content in the template.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/status-bar-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/status-bar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/status-bar-cs4" %}
