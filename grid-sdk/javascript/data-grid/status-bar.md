---
layout: post
title: JavaScript Grid Status Bar | Syncfusion
description: Learn how to configure the JavaScript Grid Status Bar with built-in panels, custom panels, formatting, and runtime panel access.
control: Status Bar
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Status Bar in JavaScript Data Grid

The [JavaScript Data Grid](https://www.syncfusion.com/javascript-ui-controls/js-grid) provides a configurable Status Bar area that displays real-time grid information. It can show built-in panels for row counts, selected row count, and selected cell aggregates, and it also supports custom panels.

The Status Bar updates automatically when grid data, filtering, or selection changes. You can access a rendered panel at runtime by using `getStatusPanel`.

## Enable Status Bar

Enable the Status Bar by setting `enableStatusBar` to **true** and configure built-in panels through `statusBarSettings.items`.

The following example demonstrates built-in panel rendering and panel placement.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/status-bar-cs1/index.html %}
{% endhighlight %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/status-bar-cs1/index.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/status-bar-cs1" %}

## Built-in Panels

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

The `SelectedCellAggregates` panel displays aggregate values for selected numeric cells. Enable cell selection and select multiple cells to view aggregate values in the Status Bar. Use the `aggregateFunctions` property within `statusPanelParams` to specify the aggregates to display, such as Sum, Avg, Min, Max, or Count. The Status Bar dynamically updates the configured aggregate values based on the selected cells.

The following example demonstrates displaying selected cell aggregates in the Status Bar. The `aggregateFunctions` property in `statusPanelParams` configures `Avg`, `Sum`, and `Max` aggregates for the selected cells.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/status-bar-cs2/index.html %}
{% endhighlight %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/status-bar-cs2/index.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/status-bar-cs2" %}

## Value Formatting

Status Bar panels support value formatting through `valueFormatter`. Use the valueFormatter property within `statusPanelParams` to customize how values are displayed in Status Bar panels, such as formatting numbers, currency, or percentages.

For example:
- `1000` → `1K`
- `$1,500.00`
- `85.25%`

The following example demonstrates formatting the total row count by using the `valueFormatter` property. The formatter converts the row count value to a locale-specific string.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/status-bar-cs3/index.html %}
{% endhighlight %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/status-bar-cs3/index.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/status-bar-cs3" %}

## Custom Panel

Create a custom Status Bar panel when you need to display application-specific information. Register the custom panel in `statusBarSettings.items` and use the `statusPanelParams` property to define a custom template and render your own content in the Status Bar.

The following example demonstrates creating a custom Status Bar panel by configuring a custom template in `statusPanelParams`. The template displays the total revenue based on the panel context.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/status-bar-cs4/index.html %}
{% endhighlight %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/status-bar-cs4/index.js %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/status-bar-cs4" %}
