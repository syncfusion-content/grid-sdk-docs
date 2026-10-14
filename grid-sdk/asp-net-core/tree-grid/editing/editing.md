---
layout: post
title: ASP.NET Core TreeGrid Edit | Syncfusion
description: Learn how to edit data in ASP.NET Core TreeGrid, including CRUD operations, editing modes, validation, and data update workflows.
platform: grid-sdk
control: Editing
documentation: ug
---


# Edit in ASP.NET Core TreeGrid

The TreeGrid component has options to dynamically insert, delete and update records. Editing feature is enabled by using [`e-treegrid-editSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridEditSettings.html) tag helper and it requires a primary key column for CRUD operations.

To define the primary key, set [`isPrimaryKey`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_IsPrimaryKey) of [`e-treegrid-column`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) tag helper to **true** in particular column.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/editing/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Edit.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/editing/edit.cs %}
{% endhighlight %}
{% endtabs %}


N> You can disable editing for a particular column, by specifying [`allowEditing`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_AllowEditing) of [`e-treegrid-column`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) tag helper to **false**.

## Toolbar with edit option

The treegrid toolbar has the built-in items to execute Editing actions. You can define this by using the [`toolbar`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_Toolbar) property.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/editing-tools/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="EditTools.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/editing-tools/editTools.cs %}
{% endhighlight %}
{% endtabs %}


## Adding row position

The TreeGrid control provides the support to add the new row in the top, bottom, above selected row, below selected row and child position of tree grid content using [`newRowPosition`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridEditSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridEditSettings_NewRowPosition) property of [`EditSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridEditSettings.html) tag helper. By default, a new row will be added at the top of the treegrid.

The following examples shows how to set new row position as **Child** in treegrid.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/new-row/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="NewRow.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/new-row/newRow.cs %}
{% endhighlight %}
{% endtabs %}


## Confirmation messages

### Delete confirmation

The delete confirm dialog can be shown when deleting a record by defining the [`showDeleteConfirmDialog`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridEditSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridEditSettings_ShowDeleteConfirmDialog) as **true**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/delete-confirm/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="DeleteConfirm.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/delete-confirm/deleteConfirm.cs %}
{% endhighlight %}
{% endtabs %}

N> The **showDeleteConfirmDialog** supports all type of edit modes.



## Default column values on add new

The treegrid provides an option to set the default value for the columns when adding a new record in it. To set a default value for the particular column by defining the [`defaultValue`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_DefaultValue) in [`e-treegrid-column`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) tag helper.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/default-value/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Defaultvalue.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/default-value/defaultvalue.cs %}
{% endhighlight %}
{% endtabs %}


## Disable editing for particular column

You can disable editing for particular columns by using the [`allowEditing`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_AllowEditing) property of [`e-treegrid-column`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) tag helper.

In the following demo, editing is disabled for the **Start Date** column.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/disable-editing/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Disable.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/disable-editing/disable.cs %}
{% endhighlight %}
{% endtabs %}

## Troubleshoot: Editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row. If [`isPrimaryKey`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_IsPrimaryKey) is not defined in the treegrid, then edit or delete action take places the first row.



N> You can refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/treegrid/overview#/fluent2) to knows how to present and manipulate data.