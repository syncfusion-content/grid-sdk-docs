---
layout: post
title: JavaScript TreeGrid Edit Types | Syncfusion
description: Learn how to use different edit types in JavaScript TreeGrid, including cell, row, batch, and dialog editing modes for managing data.
platform: grid-sdk
control: Edit types
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Edit Types in JavaScript TreeGrid

## Cell edit type and its params

The [`columns.editType`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#edittype) is used to customize the edit type of the particular column.
You can set the [`columns.editType`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#edittype) based on data type of the column.

* `numericedit` - [`NumericTextBox`](https://ej2.syncfusion.com/javascript/documentation/numerictextbox) component for integers, double, and decimal data types.

* `defaultedit` - [`TextBox`](https://ej2.syncfusion.com/javascript/documentation/textbox) component for string data type.

* `dropdownedit` - [`DropDownList`](https://ej2.syncfusion.com/javascript/documentation/drop-down-list) component for list data type.

* `booleanedit` - [`CheckBox`](https://ej2.syncfusion.com/javascript/documentation/check-box) component for boolean data type.

* `datepickeredit` - [`DatePicker`](https://ej2.syncfusion.com/javascript/documentation/datepicker) component for date data type.

* `datetimepickeredit` - [`DateTimePicker`](https://ej2.syncfusion.com/javascript/documentation/datetimepicker) component for date time data type.

Also, you can customize model of the [`columns.editType`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#edittype) component through the [`columns.edit.params`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#edit).

The following table describes cell edit type component and their corresponding edit params of the column.

Component |Example
-----|-----
[`NumericTextBox`](https://ej2.syncfusion.com/javascript/documentation/numerictextbox) | params: { decimals: 2, value: 5 }
[`TextBox`](https://ej2.syncfusion.com/javascript/documentation/textbox) | -
[`DropDownList`](https://ej2.syncfusion.com/javascript/documentation/drop-down-list) | params: { value: 'Germany' }
[`Checkbox`](https://ej2.syncfusion.com/javascript/documentation/check-box) | params: { checked: true}
[`DatePicker`](https://ej2.syncfusion.com/javascript/documentation/datepicker) | params: { format:'dd.MM.yyyy' }
[`DateTimePicker`](https://ej2.syncfusion.com/javascript/documentation/datetimepicker) | params: { value: new Date() }


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/edit-cs6" %}

> If edit type is not defined in the column, then it will be considered as the `stringedit` type (Textbox component).

## Cell edit template

The cell edit template is used to add a custom component for a particular column by invoking the following functions:

* `create` - It is used to create the element at the time of initialization.

* `write` - It is used to create the custom component or assign default value at the time of editing.

* `read` - It is used to read the value from the component at the time of save.

* `destroy` - It is used to destroy the component.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/edit-cs7" %}