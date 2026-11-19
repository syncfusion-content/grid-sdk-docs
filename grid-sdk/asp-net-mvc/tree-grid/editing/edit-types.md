---
layout: post
title: ASP.NET MVC TreeGrid Edit Types | Syncfusion
description: Learn how to use different edit types in ASP.NET MVC TreeGrid, including cell, row, batch, and dialog editing modes for managing data.
platform: grid-sdk
control: Edit Types
documentation: ug
---


# Edit Types in ASP.NET MVC TreeGrid

## Cell edit type and its params

The [`EditType`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_EditType) in [`Column`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) API is used to customize the edit type of the particular column. You can set the [`EditType`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_EditType) based on data type of the column.

* [`NumericTextBox`](https://ej2.syncfusion.com/aspnetmvc/documentation/numerictextbox) component for integers, double, and decimal data types.

* [`TextBox`](https://ej2.syncfusion.com/aspnetmvc/documentation/textbox) component for string data type.

* [`DropDownList`](https://ej2.syncfusion.com/aspnetmvc/documentation/drop-down-list) component for list data type.

* `booleanedit` - [`CheckBox`](https://ej2.syncfusion.com/aspnetmvc/documentation/check-box) component for boolean data type.

* `datepickeredit` - [`DatePicker`](https://ej2.syncfusion.com/aspnetmvc/documentation/datepicker) component for date data type.

* `datetimepickeredit` - [`DateTimePicker`](https://ej2.syncfusion.com/aspnetmvc/documentation/datetimepicker) component for date time data type.

Also, you can customize model of the [`EditType`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_EditType) component through the **params** in[`Edit`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_Edit) property of [`Column`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) API.

The following table describes cell edit type component and their corresponding edit params of the column.

Component |Example
-----|-----
[`NumericTextBox`](https://ej2.syncfusion.com/aspnetmvc/documentation/numerictextbox) | params: { decimals: 2, value: 5 }
[`TextBox`](https://ej2.syncfusion.com/aspnetmvc/documentation/textbox) | -
[`DropDownList`](https://ej2.syncfusion.com/aspnetmvc/documentation/drop-down-list) | params: { value: 'Germany' }
[`Checkbox`](https://ej2.syncfusion.com/aspnetmvc/documentation/check-box) | params: { checked: true}
[`DatePicker`](https://ej2.syncfusion.com/aspnetmvc/documentation/datepicker) | params: { format:'dd.MM.yyyy' }
[`DateTimePicker`](https://ej2.syncfusion.com/aspnetmvc/documentation/datetimepicker) | params: { value: new Date() }

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/edit-type/razor %}
{% endhighlight %}
{% highlight c# tabtitle="EditType.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/edit-type/editType.cs %}
{% endhighlight %}
{% endtabs %}

N> If edit type is not defined in the column, then it will be considered as the **stringedit** type (Textbox component).
<br/> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.