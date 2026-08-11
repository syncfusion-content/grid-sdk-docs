---
layout: post
title: React TreeGrid Column Reorder | Syncfusion
description: Learn how to reorder columns in React TreeGrid using drag-and-drop functionality and customize column arrangement.
control: Column reorder 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Column Reorder in React TreeGrid  

Columns can be reordered by drag and drop a column header from one index to another within the TreeGrid. Enable this behavior by setting [allowReordering](https://ej2.syncfusion.com/react/documentation/api/treegrid#allowreordering) to true.

To use reordering, inject the [Reorder](https://ej2.syncfusion.com/react/documentation/api/treegrid#reordermodule) module into the TreeGrid.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/column-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/column-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/column-cs3" %}

> Reordering can be disabled for a specific column by setting [columns.allowReordering](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#reordermodule) to false.

## Reorder multiple columns

Multiple columns can be reordered programmatically using the [reorderColumns](https://ej2.syncfusion.com/react/documentation/api/treegrid/column#reordercolumns) method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/grid-sdk/react/treegrid/column-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/grid-sdk/react/treegrid/column-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/treegrid/column-cs4" %}