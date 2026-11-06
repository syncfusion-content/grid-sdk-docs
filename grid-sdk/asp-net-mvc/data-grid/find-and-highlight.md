---
layout: post
title: ASP.NET MVC Grid Find and Highlight | Syncfusion
description: Learn the Find and Highlight feature in ASP.NET MVC Data Grid. Search and highlight matching text across visible columns and move between results.
platform: grid-sdk
control: DataGrid
documentation: ug
---

# Find and Highlight in ASP.NET MVC Grid

The Syncfusion ASP.NET MVC Data Grid supports find and highlight, which enables locating text matches within grid data without filtering or removing records from the view. Find highlights matching cells, provides match counts, and supports navigation between matches.

Find operates independently of the grid's Search functionality. While Search filters records based on a query, Find preserves all visible records and allows navigation through matching cells.

## Enable find

To enable the find feature, add the `Find` item to the grid [Toolbar](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.grids.grid.html#Syncfusion_EJ2_Grids_Grid_Toolbar).

The following example demonstrates enabling the find toolbar in the grid. Matching values are highlighted and the "Previous" and "Next" buttons navigate between matches.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/find-highlight/enable-find/razor %}
{% endhighlight %}
{% highlight c# tabtitle="enable-find.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/find-highlight/enable-find/enable-find.cs %}
{% endhighlight %}
{% endtabs %}

## Customize find settings

Use the `FindSettings` property to customize the find feature. Configure `FindSettings` to control search behavior, including case sensitivity.

| Property | Description |
|----------|-------------|
| `FindSettings.Key` | Specifies the current Find text. An empty string clears the Find state. |
| `FindSettings.CurrentPageOnly` | Restricts find operations to records displayed on the current page. |
| `FindSettings.CaseSensitive` | Determines whether character casing is considered when matching values. |

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
| `find(query)` | Finds and highlights every occurrence of the specified text in the Grid. An empty string clears the Find state. | 
| `findNext()` | Moves to the next match, wrapping from the last match to the first. |
| `findPrevious()` | Moves to the previous match, wrapping from the first match to the last. |
| `goToMatch(matchNumber)` | Activates the match at the specified 1-based position. Invalid values leave the active match unchanged. |
| `clearActiveMatch()` | Clears only the active match marker. Other matches stay highlighted and the Find query is unchanged. |
| `clearFind()` | Clears the Find query, highlights, match count and active match. It does not change Search, filter, sort or selection. |
| `getTotalMatches()` | Returns the number of occurrences found in the client-enumerable result set. |
| `getActiveMatch()` | Returns the active match, or `null` when no match is active. |

The following example demonstrates how to programmatically perform a find operation using an external input, along with "Find", "Next", "Previous", and "Clear" buttons.

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
