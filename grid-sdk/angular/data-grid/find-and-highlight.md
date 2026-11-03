---
layout: post
title: Angular Grid Find and Highlight | Syncfusion
description: Learn the Find and Highlight feature in Angular Data Grid. Locate text matches, highlight them across visible columns, and navigate between results without changing the view.
platform: grid-sdk
control: DataGrid
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Find and Highlight in Angular Data Grid

The Syncfusion Angular Data Grid supports find and highlight, which enables locating text matches within grid data without filtering or removing records from the view. Find highlights matching cells, provides match counts, and supports navigation between matches.

Find operates independently of the grid's Search functionality. While Search filters records based on a query, Find preserves all visible records and allows navigation through matching cells.

## Enable find

To enable the find feature, add the `Find` item to the grid toolbar, import the `FindService`, include it in the grid's `providers` section, and configure the `findSettings` property with `enabled` set to `true`.

The following example demonstrates enabling the find toolbar in the Grid. Matching values are highlighted and the **Previous** and **Next** buttons navigate between matches.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/find-highlight-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/find-highlight-cs1/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/angular/grid/find-highlight-cs1/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/find-highlight-cs1" %}

## Customize find settings

Use the [findSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/findSettings) property to customize the find feature. Configure `findSettings` to control search behavior, including case sensitivity.

| Property | Description |
|----------|-------------|
| `findSettings.currentPageOnly` | Restricts find operations to records displayed on the current page. |
| `findSettings.caseSensitive` | Determines whether character casing is considered when matching values. |

The following sample demonstrates the find feature with case-sensitive matching and highlights matching content on the currently displayed page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/find-highlight-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/find-highlight-cs2/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/angular/grid/find-highlight-cs2/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/find-highlight-cs2" %}

## Programmatic find operations

The Data Grid provides methods for performing find operations programmatically. These methods enable finding and highlighting matching content, navigating between results, retrieving match information, and clearing the active match.

| Method | Description |
|--------|-------------|
| `find(query)` | Finds and highlights matches for the specified text. |
| `findNext()` | Moves focus to the next matching result. |
| `findPrevious()` | Moves focus to the previous matching result. |
| `findGoTo(matchNumber)` | Navigates directly to the specified match. |
| `findClearActive()` | Clears the active match selection. |
| `findGetTotalMatches()` | Returns the total number of matches found. |
| `findGetActiveMatch()` | Returns the currently active match index. |

The following example demonstrates an external search box and Highlight button that uses `find` to highlight matches inside the Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/find-highlight-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/find-highlight-cs3/src/main.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/angular/grid/find-highlight-cs3/src/datasource.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/find-highlight-cs3" %}

## See also

* [Searching](./searching)
* [Toolbar](./tool-bar/tool-bar)
* [Paging](./paging)
