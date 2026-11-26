---
layout: post
title: TypeScript Grid Cell Value Update | Syncfusion
description: Update cell value programmatically in TypeScript Grid using setCellValue and setCellValueAsync to refresh only affected cells.
platform: grid-sdk
control: Cell Value Update
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Cell Value Update in TypeScript Grid

The TypeScript Grid provides methods to update an existing cell's data programmatically, without direct interaction with the grid interface. Two available methods are:

* [setCellValue](https://ej2.syncfusion.com/documentation/api/grid#setcellvalue)(key, field, value): Which applies the change synchronously to the cell value.
* [setCellValueAsync](https://ej2.syncfusion.com/documentation/api/grid#setcellvalueasync)(rowKey, field, value, delay?): Which returns a `Promise` that resolves after the update is complete, including any remote data request. Use this method when the update involves a server call, or a following action should wait until it finishes.

The "Progress" field in the row with "Task ID = 8193042" is updated synchronously using `setCellValue`, while multiple "Progress" cells across different rows are updated asynchronously using `setCellValueAsync`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/cell-value-update-cs1/index.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/cell-value-update-cs1/datasource.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/cell-value-update-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/cell-value-update-cs1" %}

> The primary key column must be specified using the [isPrimaryKey](https://ej2.syncfusion.com/documentation/api/grid/column#isprimarykey) property so the Grid can locate the row whose cell is being updated.
