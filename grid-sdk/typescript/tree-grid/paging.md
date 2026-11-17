---
layout: post
title: TypeScript TreeGrid Paging | Syncfusion
description: Learn how to use paging in TypeScript TreeGrid, including pagination configuration, customization, and advanced features for managing large datasets.
platform: grid-sdk
control: Paging
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Paging in TypeScript TreeGrid

Paging provides an option to display TreeGrid data in page segments. To enable paging, set the [`allowPaging`](https://ej2.syncfusion.com/documentation/api/treegrid#allowpaging) to true. When paging is enabled, pager component renders at the bottom of the treegrid.
Paging options can be configured through the [`pageSettings`](https://ej2.syncfusion.com/documentation/api/treegrid#pagesettings).

To use paging, inject the [`Page`](https://ej2.syncfusion.com/documentation/api/treegrid#pagermodule) module in the treegrid.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/page-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/page-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/page-cs1" %}


> You can achieve better performance by using treegrid paging to fetch only a pre-defined number of records from the data source.

## Page Size Mode

Two behaviors are available in TreeGrid paging to display certain number of records in a current page. Following are the two types of [`pageSizeMode`](https://ej2.syncfusion.com/documentation/api/treegrid/pageSettingsModel#pagesizemode).

* **All** : This is the default mode. The number of records in a page is based on [`pageSize`](https://ej2.syncfusion.com/documentation/api/treegrid/pageSettingsModel#pagesize) property.
* **Root** : The number of root nodes or the 0th level records to be displayed per page is based on [`pageSize`](https://ej2.syncfusion.com/documentation/api/treegrid/pageSettingsModel#pagesize) property.

With [`pageSizeMode`](https://ej2.syncfusion.com/documentation/api/treegrid/pageSettingsModel#pagesizemode) property as `Root`, only the root level or the 0th level records are considered in records count.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/page-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/page-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/page-cs2" %}


## Template

You can use custom elements inside the pager instead of default elements.
The custom elements can be defined by using the [`template`](https://ej2.syncfusion.com/documentation/api/treegrid/pageSettingsModel#template) property.
Inside this template, you can access the [`currentPage`](https://ej2.syncfusion.com/documentation/api/treegrid/pageSettingsModel#currentpage), [`pageSize`](https://ej2.syncfusion.com/documentation/api/treegrid/pageSettingsModel#pagesize), [`pageCount`](https://ej2.syncfusion.com/documentation/api/treegrid/pageSettingsModel#pagecount), `totalPage` and `totalRecordCount` values.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/pager-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/pager-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/pager-template-cs1" %}


## Pager with Page Size Dropdown

The pager Dropdown allows you to change the number of records in the TreeGrid dynamically. It can be enabled by defining the [`pageSettings.pageSizes`](https://ej2.syncfusion.com/documentation/api/treegrid/pageSettingsModel#pagesizes) property as true.

```ts
pageSettings: {pageSize: 7, pageSizes: true},
```

![Page size dropdown](images/pagesizes.png)

## How to render Pager at the Top of the TreeGrid

By default, Pager will be rendered at the bottom of the TreeGrid. You can also render the Pager at the top of the TreeGrid by using the `dataBound` event.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/page-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/page-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/page-cs3" %}


> During the paging action, the pager component triggers the below three events.
> * The `created` event triggers when Pager is created.
> * The `click` event triggers when the numeric items in the pager is clicked.
> * The `dropDownChanged` event triggers when pageSize DropDownList value is selected.
> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.