---
layout: post
title: JavaScript TreeGrid Searching | Syncfusion
description: Learn how to enable and customize searching in JavaScript TreeGrid, including search settings, operators, column-specific search, and advanced options.
platform: grid-sdk
control: Searching
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Searching in JavaScript TreeGrid

You can search records in a TreeGrid, by using the [`search`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#search) method with search key as a parameter. This also provides an option to integrate search text box in treegrid's toolbar by adding `search` item to the [`toolbar`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#toolbar).

To search records, inject the [`Filter`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#fitermodule) module in the treegrid.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/searching-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/searching-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/searching-cs1" %}

## Initial search

To apply search at initial rendering, set the fields, operator, key, and ignoreCase in the [`searchSettings`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#searchsettings).


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/searching-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/searching-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/searching-cs2" %}

> By default, treegrid searches all the bound column values. To customize this behavior define the [`searchSettings.fields`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/searchSettingsModel#fields) property.

## Search operators

The search operator can be defined in the [`searchSettings.operator`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/searchSettingsModel#operator) property to configure specific searching.

The following operators are supported in searching:

Operator |Description
-----|-----
startsWith |Checks whether a value begins with the specified value.
endsWith |Checks whether a value ends with the specified value.
contains |Checks whether a value contains the specified value.
equal |Checks whether a value is equal to the specified value.
notEqual |Checks for values not equal to the specified value.

> By default, the [`searchSettings.operator`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/searchSettingsModel#operator) value is `contains`.

## Search by external button

To search treegrid records from an external button, invoke the [`search`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#search) method.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/search-method-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/search-method-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/search-method-cs1" %}

## Search specific columns

By default, treegrid searches all visible columns. You can search specific columns by defining the specific column's field names in the [`searchSettings.fields`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/searchSettingsModel#fields) property.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/searching-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/searching-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/searching-cs3" %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.