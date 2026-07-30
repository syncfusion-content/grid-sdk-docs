---
layout: post
title: Edit types in JavaScript Treegrid control | Syncfusion
description: Learn here all about Edit types in Syncfusion JavaScript Treegrid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Edit types 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Edit types in JavaScript Treegrid control

## Cell edit type and its params

The [`columns.editType`](../../api/treegrid/column/#edittype) is used to customize the edit type of the particular column.
You can set the [`columns.editType`](../../api/treegrid/column/#edittype) based on data type of the column.

* `numericedit` - [`NumericTextBox`](../../numerictextbox) component for integers, double, and decimal data types.

* `defaultedit` - [`TextBox`](../../textbox) component for string data type.

* `dropdownedit` - [`DropDownList`](../../drop-down-list) component for list data type.

* `booleanedit` - [`CheckBox`](../../check-box) component for boolean data type.

* `datepickeredit` - [`DatePicker`](../../datepicker) component for date data type.

* `datetimepickeredit` - [`DateTimePicker`](../../datetimepicker) component for date time data type.

Also, you can customize model of the [`columns.editType`](../../api/treegrid/column/#edittype) component through the [`columns.edit.params`](../../api/treegrid/column/#edit).

The following table describes cell edit type component and their corresponding edit params of the column.

Component |Example
-----|-----
[`NumericTextBox`](../../numerictextbox) | params: { decimals: 2, value: 5 }
[`TextBox`](../../textbox) | -
[`DropDownList`](../../drop-down-list) | params: { value: 'Germany' }
[`Checkbox`](../../check-box) | params: { checked: true}
[`DatePicker`](../../datepicker) | params: { format:'dd.MM.yyyy' }
[`DateTimePicker`](../../datetimepicker) | params: { value: new Date() }

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/edit-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/edit-cs6" %}
{% endif %}

> If edit type is not defined in the column, then it will be considered as the `stringedit` type (Textbox component).

## Cell edit template

The cell edit template is used to add a custom component for a particular column by invoking the following functions:

* `create` - It is used to create the element at the time of initialization.

* `write` - It is used to create the custom component or assign default value at the time of editing.

* `read` - It is used to read the value from the component at the time of save.

* `destroy` - It is used to destroy the component.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/edit-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/edit-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/edit-cs7" %}
{% endif %}