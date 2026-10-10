---
layout: post
title: ASP.NET MVC TreeGrid Cell Selection | Syncfusion
description: Learn how to perform cell selection in the ASP.NET MVC TreeGrid, including selection modes, programmatic APIs, and retrieving selected cell indexes.
platform: grid-sdk
control: Cell Selection
documentation: ug
---

# Cell Selection in ASP.NET MVC TreeGrid

Cell selection can be done through simple mouse down or arrow keys (up, down, left, and right).

The treegrid supports two types of cell selection mode that can be set by using the [`CellSelectionMode`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSelectionSettings_CellSelectionMode) property of [`SelectionSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html). They are:

* **Flow**: The Flow value is set by default. The range of cells are selected between the start index and end index that includes in between cells of rows.
* **Box**: Range of cells are selected from the start and end column indexes that includes in between cells of rows within the range.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/selection/cell-selection/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Cell-selection.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/selection/cell-selection/cell-selection.cs %}
{% endhighlight %}
{% endtabs %}

N> Cell selection requires the [`Mode`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridSelectionSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSelectionSettings_Mode) to be **Cell** or **Both**, and **Type** should be **Multiple**.
<br/> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.