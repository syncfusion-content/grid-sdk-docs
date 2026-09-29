---
layout: post
title: TypeScript Grid Row Number Column | Syncfusion
description: Learn how to display row numbers in the TypeScript Data Grid using the built-in row number column feature in Syncfusion.
platform: grid-sdk
control: Row number column
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Number Column in TypeScript Data Grid

The TypeScript Data Grid provides built-in support for displaying row numbers through a dedicated row number column. This column displays the position of each record in the current view and is automatically maintained by the Grid.

To display row numbers, set the [columns->type](../../api/grid/column#type) property to `RowNumber`. This creates a read-only column for displaying row numbers, eliminating the need to include a separate row number field in the data source.

The Grid automatically updates row numbers when operations such as paging, sorting, filtering, and grouping are performed. This ensures that the displayed row numbers always reflect the current view and order of the records.

The following example demonstrates how to add a row number column to the Grid:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/rownumber/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/rownumber/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/rownumber" %}
