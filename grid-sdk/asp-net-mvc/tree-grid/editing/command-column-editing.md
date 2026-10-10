---
layout: post
title: ASP.NET MVC TreeGrid Command Column Editing | Syncfusion
description: Learn how to use command column editing in the ASP.NET MVC TreeGrid to add CRUD and custom action buttons for row-level operations.
platform: grid-sdk
control: Command Column Editing
documentation: ug
---

# Command Column Editing in ASP.NET MVC TreeGrid

The command column provides an option to add CRUD action buttons in a column. This can be defined by the [`Commands`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_Commands) property of [`Column`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) API.

The available built-in command buttons are:

| Command Button | Actions |
|----------------|---------|
| Edit | Edit the current row.|
| Delete | Delete the current row.|
| Save | Update the edited row.|
| Cancel | Cancel the edited state. |

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/command-columns/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Commandcolumn.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/command-columns/commandcolumn.cs %}
{% endhighlight %}
{% endtabs %}

## Custom command

The custom command buttons can be added in a column by using the [`Commands`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_Commands) property of [`Column`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) API and the action for the custom buttons can be defined in the **ButtonOption.Click** event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/custom-command/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Customcommand.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/custom-command/customcommand.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.