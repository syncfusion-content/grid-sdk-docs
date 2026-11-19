---
layout: post
title: TypeScript TreeGrid Filter Menu | Syncfusion
description: Learn how to use the filter menu in TypeScript TreeGrid, including column filtering, filter operators, and custom filter options.
platform: grid-sdk
control: Filter menu
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Filter Menu in TypeScript TreeGrid

You can enable filter menu by setting the [`filterSettings.type`](https://ej2.syncfusion.com/documentation/api/treegrid/filterSettingsModel#type) as `Menu`. The filter menu UI will be rendered based on its column type, which allows you to filter data.
You can filter the records with different operators.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/filtering-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/filtering-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/filtering-cs6" %}


> * [`allowFiltering`](https://ej2.syncfusion.com/documentation/api/treegrid#allowfiltering) must be set as true to enable filter menu.
> * Setting [`columns.allowFiltering`](https://ej2.syncfusion.com/documentation/api/treegrid/column#allowfiltering) as false will prevent filter menu rendering for a particular column.

## Custom component in filter menu

The [`column.filter.ui`](https://ej2.syncfusion.com/documentation/api/treegrid/column#filter) is used to add custom filter components to a particular column. To implement custom filter ui, define the following functions:

  * `create`:  Creates custom component.
  * `write`: Wire events for custom component.
  * `read`: Read the filter value from custom component.

In the following sample, dropdown is used  as custom component in the duration column.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/filtering-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/filtering-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/filtering-cs7" %}


## Enable different filter dialog for a column

You can use both `Menu` and `Excel` filter in a same TreeGrid. To do so, set the
[`column.filter.type`](https://ej2.syncfusion.com/documentation/api/treegrid/column#filter) as `Menu` or `Excel`.

In the following sample menu filter is enabled by default and excel filter is enabled for the Task Name column using the [`column.filter.type`](https://ej2.syncfusion.com/documentation/api/treegrid/column#filter).


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/filtering-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/filtering-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/filtering-cs8" %}
