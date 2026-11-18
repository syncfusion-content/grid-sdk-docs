---
layout: post
title: Vue TreeGrid Edit Types | Syncfusion
description: Learn how to use different edit types in Vue TreeGrid, including cell, row, batch, and dialog editing modes for managing data.
control: Edit types 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Edit Types in Vue TreeGrid

## Cell edit type and its params

The [`columns.editType`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#edittype) is used to customize the edit type of the particular column.
You can set the [`columns.editType`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#edittype) based on data type of the column.

* `numericedit` - [`NumericTextBox`](https://ej2.syncfusion.com/vue/documentation/numerictextbox) component for integers, double, and decimal data types.

* `defaultedit` - [`TextBox`](https://ej2.syncfusion.com/vue/documentation/textbox) component for string data type.

* `dropdownedit` - [`DropDownList`](https://ej2.syncfusion.com/vue/documentation/drop-down-list) component for list data type.

* `booleanedit` - [`CheckBox`](https://ej2.syncfusion.com/vue/documentation/check-box) component for boolean data type.

* `datepickeredit` - [`DatePicker`](https://ej2.syncfusion.com/vue/documentation/datepicker) component for date data type.

* `datetimepickeredit` - [`DateTimePicker`](https://ej2.syncfusion.com/vue/documentation/datetimepicker) component for date time data type.

Also, you can customize model of the [`columns.editType`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#edittype) component through the [`columns.edit.params`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#edit).

The following table describes cell edit type component and their corresponding edit params of the column.

Component |Example
-----|-----
[`NumericTextBox`](https://ej2.syncfusion.com/vue/documentation/numerictextbox) | params: { decimals: 2, value: 5 }
[`TextBox`](https://ej2.syncfusion.com/vue/documentation/textbox) | -
[`DropDownList`](https://ej2.syncfusion.com/vue/documentation/drop-down-list) | params: { value: 'Germany' }
[`Checkbox`](https://ej2.syncfusion.com/vue/documentation/check-box) | params: { checked: true}
[`DatePicker`](https://ej2.syncfusion.com/vue/documentation/datepicker) | params: { format:'dd.MM.yyyy' }
[`DateTimePicker`](https://ej2.syncfusion.com/vue/documentation/datetimepicker) | params: { value: new Date() }

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/editing/default-cs6/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/editing/default-cs6/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/editing/default-cs6" %}

> If edit type is not defined in the column, then it will be considered as the `stringedit` type (Textbox component).