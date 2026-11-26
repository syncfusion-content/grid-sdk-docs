---
layout: post
title: React Grid Row Data Update | Syncfusion
description: Update row data programmatically in React Data Grid using setRowData and setRowDataAsync to refresh affected rows.
control: Row Data Update
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Data Update in React Data Grid

The React Data Grid provides methods to update an existing row's data programmatically, without direct interaction with the grid interface. Two available methods are

* [setRowData](https://ej2.syncfusion.com/react/documentation/api/grid#setrowdata)(key, data): Which applies the change synchronously to the row data.
* [setRowDataAsync](https://ej2.syncfusion.com/react/documentation/api/grid#setrowdataasync)(key, value, delay?): Which returns a `Promise` that resolves after the update is complete, including any remote data request. Use this method when the update involves a server call, or a following action should wait until it finishes.

Clicking "Update Single Data" updates the "Cost" value of the row "ITEM-1002" using `setRowData`, while clicking "Update Multiple Data" updates the "Cost" values of rows "ITEM-1001", "ITEM-1002", and "ITEM-1003" asynchronously using `setRowDataAsync`.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid-sdk/react/grid/row-data-update-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid-sdk/react/grid/row-data-update-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid-sdk/react/grid/row-data-update-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid-sdk/react/grid/row-data-update-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/react/grid/row-data-update-cs1" %}

> The primary key column must be specified using the [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/grid/column#isprimarykey) property so the Data Grid can locate the row that needs to be updated.
