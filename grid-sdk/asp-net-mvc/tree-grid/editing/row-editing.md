---
layout: post
title: ASP.NET MVC TreeGrid Row Editing | Syncfusion
description: Learn how to use row editing in ASP.NET MVC TreeGrid, including editing rows, programmatic CRUD operations, and confirmation dialogs.
platform: grid-sdk
control: Row Editing
documentation: ug
---

# Row Editing in ASP.NET MVC TreeGrid

In Row edit mode, when you start editing the currently selected record, the entire row is changed to edit state.
You can change the cell values of the row and save edited data to the data source.
To enable Row edit, set the [`Mode`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridEditSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridEditSettings_Mode) property of [`EditSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridEditSettings.html) as **Row**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/edit-row/razor %}
{% endhighlight %}
{% highlight c# tabtitle="EditRow.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/edit-row/editRow.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.