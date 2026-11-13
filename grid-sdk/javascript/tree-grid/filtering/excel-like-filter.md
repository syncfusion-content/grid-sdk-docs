---
layout: post
title: JavaScript TreeGrid Excel-Like Filter | Syncfusion
description: Learn how to use Excel-like filtering in JavaScript TreeGrid, including filter menus, search, checkbox filtering, and custom filter options.
platform: grid-sdk
control: Excel like filter
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Excel-Like Filter in JavaScript TreeGrid

You can enable Excel like filter by defining.[`filterSettings.type`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/filterSettingsModel#type) as `Excel`.The excel menu contains an option such as Sorting, Clear filter, Sub menu for advanced filtering.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/filtering-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/filtering-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/filtering-cs1" %}

## Change default excel filter operator

You can change the default excel-filter operator by changing the column operator as `contains` from `startsWith` in the [`actionBegin`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#actionBegin) event


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/filtering-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/filtering-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/filtering-cs2" %}