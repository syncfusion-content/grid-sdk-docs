---
layout: post
title: ASP.NET Core TreeGrid Row Editing | Syncfusion
description: Learn how to use row editing in ASP.NET Core TreeGrid, including editing rows, programmatic CRUD operations, and confirmation dialogs.
platform: grid-sdk
control: Row Editing
documentation: ug
---

# Row Editing in ASP.NET Core TreeGrid

In Row edit mode, when you start editing the currently selected record, the entire row is changed to edit state. You can change the cell values of the row and save edited data to the data source.

To enable Row edit, set the [`mode`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridEditSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridEditSettings_Mode) property of [`EditSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridEditSettings.html) tag helper as **Row**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/edit-row/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="EditRow.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/edit-row/editRow.cs %}
{% endhighlight %}
{% endtabs %}


N> You can refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/treegrid/overview#/fluent2) to knows how to present and manipulate data.