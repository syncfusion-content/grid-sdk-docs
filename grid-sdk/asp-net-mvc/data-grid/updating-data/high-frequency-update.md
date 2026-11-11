---
layout: post
title: ASP.NET MVC Grid High Frequency Update | Syncfusion
description: Demonstrate synchronous and asynchronous cell updates in ASP.NET MVC Data Grid with performance measurement for high-frequency scenarios.
platform: grid-sdk
control: High Frequency Update
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# High Frequency Cell Updates in ASP.NET MVC Data Grid

The ASP.NET MVC Data Grid provides methods to update cell values programmatically, both synchronously and asynchronously. These methods are particularly useful for simulating high-frequency updates, where performance differences between synchronous and asynchronous operations can be evaluated.

* [setCellValue](https://ej2.syncfusion.com/documentation/api/grid/#setcellvalue)(key, field, value): Which applies the change synchronously to the cell value.
* [setCellValueAsync](https://ej2.syncfusion.com/documentation/api/grid/#setcellvalueasync)(rowKey, field, value, delay?): Which returns a `Promise` that resolves after the update is complete, including any data request. Use this method when the update involves a server call, or a following action should wait until it finishes.

Clicking "Normal update" updates the "Revenue" value synchronously using `setCellValue`, while clicking "Async update" updates the "Revenue" value asynchronously using `setCellValueAsync`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/edit/high-frequency-update-cs1/razor %}
{% endhighlight %}
{% highlight c# tabtitle="high-frequency-update-cs1.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/edit/high-frequency-update-cs1/high-frequency-update-cs1.cs %}
{% endhighlight %}
{% endtabs %}

![High frequency update](../images/editing/high-frequency-update.gif)

> The primary key column must be specified using the [IsPrimaryKey](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Grids.GridColumn.html#Syncfusion_EJ2_Grids_GridColumn_IsPrimaryKey) property so the Data Grid can locate the cell being updated.
