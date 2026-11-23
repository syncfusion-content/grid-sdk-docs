---
layout: post
title: ASP.NET Core Grid Find and Highlight | Syncfusion
description: Learn the Find and Highlight feature in ASP.NET Core Data Grid. Search and highlight matching text across visible columns and move between results.
platform: grid-sdk
control: DataGrid
documentation: ug
---

# Find and Highlight in ASP.NET Core Grid

The Syncfusion ASP.NET Core Data Grid supports Find and Highlight. This feature locates text matches in Grid data without filtering or removing records from the view. Find highlights matching cells, provides match counts, and supports navigation between matches.

Find operates independently of the Grid's Search functionality. While Search filters records based on a query, Find preserves all visible records and enables navigation through matching cells.

## Enable find and highlight

To enable Find and Highlight, add the `Find` item to the Grid [toolbar](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.grids.grid.html#Syncfusion_EJ2_Grids_Grid_Toolbar).

The following example shows the Find toolbar item enabled in the Grid. Matching values are highlighted, and the "Previous" and "Next" buttons navigate between matches.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/find-highlight/enable-find/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="enable-find.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/find-highlight/enable-find/enable-find.cs %}
{% endhighlight %}
{% endtabs %}

## Customize find settings

Use the `findSettings` property to customize Find and Highlight behavior, including case sensitivity.

| Property | Description |
|----------|-------------|
| `findSettings.key` | Specifies the current Find text. An empty string clears the Find state. |
| `findSettings.currentPageOnly` | Restricts find operations to records displayed on the current page. |
| `findSettings.caseSensitive` | Determines whether character casing is considered when matching values. |

The following sample demonstrates case-sensitive Find operations and highlights matching content on the currently displayed page.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/find-highlight/customize-settings/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="customize-settings.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/find-highlight/customize-settings/customize-settings.cs %}
{% endhighlight %}
{% endtabs %}

## Programmatic find operations

The Data Grid provides methods to perform Find operations programmatically. Use these methods to find and highlight matching content, navigate between results, retrieve match information, and clear the active match.

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

The following example shows a Find operation using an external input and "Find", "Next", "Previous", and "Clear" buttons.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/find-highlight/programmatic-find/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="programmatic-find.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/find-highlight/programmatic-find/programmatic-find.cs %}
{% endhighlight %}
{% endtabs %}

## See also

* [Searching](./searching)
* [Toolbar](./tool-bar/tool-bar)
* [Paging](./paging)