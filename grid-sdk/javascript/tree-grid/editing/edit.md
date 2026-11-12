---
layout: post
title: JavaScript TreeGrid Edit | Syncfusion
description: Learn how to edit data in JavaScript TreeGrid, including CRUD operations, editing modes, validation, and data update workflows.
platform: grid-sdk
control: Edit
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Edit in JavaScript TreeGrid

The TreeGrid component has options to dynamically insert, delete and update records.
Editing feature is enabled by using [`editSettings`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#editsettings) property and it requires a primary key column for CRUD operations.
To define the primary key, set [`columns.isPrimaryKey`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#isprimarykey) to `true` in particular column.

To use CRUD, inject the [`Edit`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#editmodule) module in treegrid.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/edit-cs8" %}

> * You can disable editing for a particular column, by specifying [`columns.allowEditing`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#allowediting) to `false`.

## Toolbar with edit option

The treegrid toolbar has the built-in items to execute Editing actions.
You can define this by using the [`toolbar`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#toolbar) property.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/edit-cs9" %}

## Adding row position

The TreeGrid control provides the support to add the new row in the top, bottom, above selected row, below selected row and child position of tree grid content using [`editSettings.newRowPosition`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/editSettingsModel#newrowposition) property. By default, a new row will be added at the top of the treegrid.

The following examples shows how to set new row position as `Child` in tree grid.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/edit-cs10" %}

## Confirmation messages

### Delete confirmation

The delete confirm dialog can be shown when deleting a record by defining the [`showDeleteConfirmDialog`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/editSettingsModel#showdeleteconfirmdialog) as `true`


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/edit-cs11" %}

> The `showDeleteConfirmDialog` supports all type of edit modes.

## Default column values on add new

The treegrid provides an option to set the default value for the columns when adding a new record in it.
To set a default value for the particular column by defining the [`columns.defaultValue`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#defaultvalue).


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/edit-cs12" %}

## Disable editing for particular column

You can disable editing for particular columns by using the [`columns.allowEditing`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#allowediting).

In the following demo, editing is disabled for the `Start Date` column.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/edit-cs13" %}

## Troubleshoot: Editing works only for first row

The Editing functionalities can be performed based upon the primary key value of the selected row.
If `primaryKey` is not defined in the treegrid, then edit or delete action take places the first row.

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.