---
layout: post
title: Find and Highlight in TypeScript Grid control | Syncfusion
description: Learn the Find and Highlight feature in TypeScript Data Grid. Search and highlight matching text across visible columns and move between results.
platform: grid-sdk
control: DataGrid
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Find and Highlight in TypeScript Grid control

The Syncfusion TypeScript Data Grid supports find and highlight, which enables locating text matches within grid data without filtering or removing records from the view. Find highlights matching cells, provides match counts, and supports navigation between matches.

Find operates independently of the grid's Search functionality. While Search filters records based on a query, Find preserves all visible records and allows navigation through matching cells.

## Enable find

To enable the find feature, add the `Find` item to the grid toolbar, import and inject the `Find` module.

The following example demonstrates enabling the find toolbar in the grid. Matching values are highlighted and the "Previous" and "Next" buttons navigate between matches.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/find-highlight-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/find-highlight-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/find-highlight-cs1" %}

## Customize find settings

Use the `findSettings` property to customize the find feature. Configure `findSettings` to control search behavior, including case sensitivity.

| Property | Description |
|----------|-------------|
| `findSettings.key` | Specifies the current Find text. An empty string clears the Find state. |
| `findSettings.currentPageOnly` | Restricts find operations to records displayed on the current page. |
| `findSettings.caseSensitive` | Determines whether character casing is considered when matching values. |

The following sample demonstrates the find feature with case-sensitive matching and highlights matching content on the currently displayed page.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/find-highlight-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/find-highlight-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/find-highlight-cs2" %}

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

The following example demonstrates how to programmatically perform a find operation using an external input, along with Find, Next, Previous, and Clear buttons.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/find-highlight-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/find-highlight-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/find-highlight-cs3" %}

## See also

* [Searching](./searching)
* [Toolbar](./tool-bar/tool-bar)
* [Paging](./paging)
