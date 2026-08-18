---
layout: post
title: ASP.NET MVC TreeGrid Cell Editing | Syncfusion
description: Learn how to use cell editing in the ASP.NET MVC TreeGrid, including enabling, editing, and handling cell edit events.NET MVC Tree Grid component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Cell Editing
publishingplatform: grid-sdk
documentation: ug
---

# Cell Editing in ASP.NET MVC TreeGrid

In Cell edit mode, when you double click on a cell, it is changed to edit state.
You can change the cell value and save to the data source.
To enable Cell edit, set the [`Mode`](https://help.syncfusion.com/cr/cref_files/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.TreeGrid.TreeGridEditSettings~Mode.html) property of [`EditSettings`](https://help.syncfusion.com/cr/cref_files/aspnetcore-js2/Syncfusion.EJ2~Syncfusion.EJ2.TreeGrid.TreeGridEditSettings.html) as **Cell**.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/edit-cell/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="EditCell.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/edit-cell/editCell.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/edit-cell/razor %}
{% endhighlight %}
{% highlight c# tabtitle="EditCell.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/edit-cell/editCell.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



N> Cell edit mode is default mode of editing.
<br/> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/TreeGrid/Overview#/material) to knows how to present and manipulate data.