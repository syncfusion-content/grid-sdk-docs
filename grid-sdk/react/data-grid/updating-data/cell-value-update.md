---
layout: post
title: React Grid Cell Value Update | Syncfusion
description: Update cell value programmatically in React Data Grid using setCellValue and setCellValueAsync to refresh only affected cells.
control: Cell Value Update
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Cell Value Update in React Data Grid

The React Data Grid provides methods to update an existing cell's data programmatically, without direct interaction with the grid interface. Two available methods are:

* [setCellValue](https://ej2.syncfusion.com/react/documentation/api/grid#setcellvalue)(key, field, value): Which applies the change synchronously to the cell value.
* [setCellValueAsync](https://ej2.syncfusion.com/react/documentation/api/grid#setcellvalueasync)(rowKey, field, value, delay?): Which returns a `Promise` that resolves after the update is complete, including any remote data request. Use this method when the update involves a server call, or a following action should wait until it finishes.

The "Progress" field in the row with "Task ID = 8193042" is updated synchronously using `setCellValue`, while multiple "Progress" cells across different rows are updated asynchronously using `setCellValueAsync`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid-sdk/react/grid/cell-value-update-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid-sdk/react/grid/cell-value-update-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid-sdk/react/grid/cell-value-update-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid-sdk/react/grid/cell-value-update-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/grid/cell-value-update-cs1" %}

> The primary key column must be specified using the [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column#isprimarykey) property so the Data Grid can locate the row whose cell is being updated.
