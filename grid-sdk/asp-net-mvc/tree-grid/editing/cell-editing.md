---
layout: post
title: ASP.NET MVC TreeGrid Cell Editing | Syncfusion
description: Learn how to enable and customize cell editing in the ASP.NET MVC TreeGrid, including edit modes, validation, and cell edit events.
platform: grid-sdk
control: Cell Editing
documentation: ug
---

# Cell Editing in ASP.NET MVC TreeGrid

In Cell edit mode, when you double click on a cell, it is changed to edit state. You can change the cell value and save to the data source. To enable Cell edit, set the [`Mode`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridEditSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridEditSettings_Mode) property of [`EditSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridEditSettings.html) as **Cell**.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/edit-cell/razor %}
{% endhighlight %}
{% highlight c# tabtitle="EditCell.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/edit-cell/editCell.cs %}
{% endhighlight %}
{% endtabs %}

N> Cell edit mode is default mode of editing.
<br/> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.