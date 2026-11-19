---
layout: post
title: Angular Grid Row Data Update | Syncfusion
description: Update row data programmatically in Angular Data Grid using setRowData and setRowDataAsync to refresh affected rows.
control: Row Data Update
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Data Update in Angular Data Grid

The Angular Data Grid provides methods to update an existing row's data programmatically, without direct interaction with the grid interface. Two available methods are

* [setRowData](https://ej2.syncfusion.com/angular/documentation/api/grid#setrowdata)(key, data): Which applies the change synchronously to the row data.
* [setRowDataAsync](https://ej2.syncfusion.com/angular/documentation/api/grid#setrowdataasync)(key, value, delay?): Which returns a `Promise` that resolves after the update is complete, including any remote data request. Use this method when the update involves a server call, or a following action should wait until it finishes.

Clicking "Update Single Data" updates the "Cost" value of the row "ITEM-1002" using `setRowData`, while clicking "Update Multiple Data" updates the "Cost" values of rows "ITEM-1001", "ITEM-1002", and "ITEM-1003" asynchronously using `setRowDataAsync`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/row-data-update-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/angular/grid/row-data-update-cs1/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/row-data-update-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/row-data-update-cs1" %}

> The primary key column must be specified using the [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) property so the Data Grid can locate the row that needs to be updated.
