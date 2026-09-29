---
layout: post
title: Angular Grid Row Number Column | Syncfusion
description: Learn how to display row numbers in the Angular Data Grid using the built-in row number column feature in Syncfusion.
platform: grid-sdk
control: Row number column
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Number Column in Angular Data Grid

The Angular Data Grid provides built-in support for displaying row numbers through a dedicated row number column. This column displays the position of each record in the current view and is automatically maintained by the Grid.

To display row numbers, set the [columns->type](https://ej2.syncfusion.com/angular/documentation/api/grid/column#type) property to `RowNumber`. This creates a read-only column for displaying row numbers, eliminating the need to include a separate row number field in the data source.

The Grid automatically updates row numbers when operations such as paging, sorting, filtering, and grouping are performed. This ensures that the displayed row numbers always reflect the current view and order of the records.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/rownumber/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/rownumber/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/grid/rownumber" %}
