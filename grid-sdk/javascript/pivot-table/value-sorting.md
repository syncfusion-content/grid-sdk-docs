---
layout: post
title: Value sorting in JavaScript Pivotview control | Syncfusion
description: Learn here all about Value sorting in Syncfusion JavaScript Pivotview control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Value sorting 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Value sorting in JavaScript Pivotview control

Value sorting allows you to sort individual column based on it's values either in ascending or descending order. It can been enabled by setting the `enableValueSorting` property to **true**. You can sort the column values by clicking the column header.

Value sorting can be configured using the `valueSortSettings` option through code behind. The settings required to sort value fields at initial rendering are:
* `headerText`: It allows to set the column header names with delimiters, that is used for value sorting.
* `headerDelimiter`: It allows to set the delimiters string to separate the given header text.
* `sortOrder`: It allows to set the sort direction of the value field.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs488/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs488/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs488" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs488/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs488/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs488" %}
{% endif %}

## See Also

* [Sorting](./sorting)