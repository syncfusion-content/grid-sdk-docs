---
layout: post
title: ASP.NET MVC Grid Find and Highlight | Syncfusion
description: Learn the Find and Highlight feature in ASP.NET MVC Data Grid. Locate text matches, highlight them across visible columns, and navigate between results without changing the view.
platform: grid-sdk
control: DataGrid
documentation: ug
---

# Find and Highlight in ASP.NET MVC Grid

The Syncfusion ASP.NET MVC Data Grid supports find and highlight, which enables locating text matches within grid data without filtering or removing records from the view. Find highlights matching cells, provides match counts, and supports navigation between matches.

Find operates independently of the grid's Search functionality. While Search filters records based on a query, Find preserves all visible records and allows navigation through matching cells.

## Enable find

To enable the find feature, add the `Find` item to the grid [toolbar](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Grids.GridBuilder-1.html#Syncfusion_EJ2_Grids_GridBuilder_1_Toolbar_System_Collections_Generic_List_System_String__), and configure the [findSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Grids.GridFindSettingsBuilder.html) property with `enabled` set to `true`.

The following example demonstrates enabling the find toolbar in the Grid. Matching values are highlighted and the **Previous** and **Next** buttons navigate between matches.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/find-highlight/enable-find/razor %}
{% endhighlight %}
{% highlight c# tabtitle="enable-find.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/find-highlight/enable-find/enable-find.cs %}
{% endhighlight %}
{% endtabs %}

## Customize find settings

Use the [findSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Grids.GridFindSettingsBuilder.html) property to customize the find feature. Configure `findSettings` to control search behavior, including case sensitivity and the page scope of the search.

| Property | Description |
|----------|-------------|
| `findSettings.currentPageOnly` | Restricts find operations to records displayed on the current page. |
| `findSettings.caseSensitive` | Determines whether character casing is considered when matching values. |

The following sample demonstrates the find feature with case-sensitive matching and highlights matching content on the currently displayed page.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/find-highlight/customize-settings/razor %}
{% endhighlight %}
{% highlight c# tabtitle="customize-settings.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/find-highlight/customize-settings/customize-settings.cs %}
{% endhighlight %}
{% endtabs %}

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

The following example demonstrates an external search box and Highlight button that uses the `find` method to highlight matches inside the Grid.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/find-highlight/programmatic-find/razor %}
{% endhighlight %}
{% highlight c# tabtitle="programmatic-find.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/find-highlight/programmatic-find/programmatic-find.cs %}
{% endhighlight %}
{% endtabs %}

## See also

* [Searching](./searching)
* [Toolbar](./tool-bar/tool-bar)
* [Paging](./paging)
