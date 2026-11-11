---
layout: post
title: ASP.NET Core Grid Data Transition | Syncfusion
description: Add, update, and delete records programmatically in ASP.NET Core Data Grid using synchronous and asynchronous methods for data transition.
platform: grid-sdk
control: Data Transition
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Data Transition in ASP.NET Core Data Grid

The ASP.NET Core Data Grid provides methods to add, edit, and delete records programmatically, without direct interaction with the grid interface. These methods support both synchronous and asynchronous execution, enabling flexible control over record editing.

* [addRecord](https://ej2.syncfusion.com/documentation/api/grid/#addrecord): Starts a new entry. If no data is passed, a blank form opens for input.
* [startEdit](https://ej2.syncfusion.com/documentation/api/grid/#startedit): Enables edit mode for the selected row.
* [deleteRecord](https://ej2.syncfusion.com/documentation/api/grid/#deleterecord): Removes the selected row.
* [addRecordAsync](https://ej2.syncfusion.com/documentation/api/grid/#addrecordasync): Adds a new record asynchronously to the grid by passing the new data object.
* [updateRowAsync](https://ej2.syncfusion.com/documentation/api/grid/#updaterowasync): Updates a specific row asynchronously by passing the new data object for that row.
* [deleteRecordAsync](https://ej2.syncfusion.com/documentation/api/grid/#deleterecordasync): Removes a record asynchronously from the grid by passing the primary key value and the corresponding data to identify the row.

A single record is added synchronously using `addRecord`, while two records are added asynchronously using `addRecordAsync`. Additionally, the record at index "1" is updated asynchronously using `updateRowAsync`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/edit/data-transition-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="data-transition-cs1.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/edit/data-transition-cs1/data-transition-cs1.cs %}
{% endhighlight %}
{% endtabs %}

![Data transition update](../images/editing/data-transition.gif)

> `addRecordAsync`, `updateRowAsync` and `deleteRecordAsync` return a `Promise` that resolves after the update is complete, including any data request. Use these methods when adding or removing a record, or updating an existing row involves a server call, or a following action should wait until it finishes.
