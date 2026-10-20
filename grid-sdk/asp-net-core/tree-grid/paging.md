---
layout: post
title: ASP.NET Core TreeGrid Paging | Syncfusion
description: Learn how to use Paging in ASP.NET Core TreeGrid to navigate large datasets, configure paging options, customize page navigation, and improve data browsing.
platform: grid-sdk
control: Paging
documentation: ug
---


# Paging in ASP.NET Core TreeGrid

Paging provides an option to display TreeGrid data in page segments. To enable paging, set the [`AllowPaging`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_AllowPaging) to true. When paging is enabled, pager component renders at the bottom of the treegrid. Paging options can be configured through the [`PageSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridPageSettings.html).

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/paging/default-paging/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="DefaultPaging.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/paging/default-paging/defaultPaging.cs %}
{% endhighlight %}
{% endtabs %}

N> You can achieve better performance by using treegrid paging to fetch only a pre-defined number of records from the data source.

## Page Size Mode

Two behavior are available in TreeGrid paging to display certain number of records in a current page. Following are the two types of [`PageSizeMode`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridPageSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridPageSettings_PageSizeMode).

* **All** : This is the default mode. The number of records in a page is based on [`PageSize`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridPageSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridPageSettings_PageSize) property.
* **Root** : The number of root nodes or the 0th level records to be displayed per page is based on [`PageSize`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridPageSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridPageSettings_PageSize) property.

With [`PageSizeMode`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridPageSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridPageSettings_PageSizeMode) property as `Root`, only the root level or the 0th level records are considered in records count.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/paging/page-mode/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="PageMode.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/paging/page-mode/pageMode.cs %}
{% endhighlight %}
{% endtabs %}

## Template

You can use custom elements inside the pager instead of default elements. The custom elements can be defined by using the [`Template`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridPageSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridPageSettings_Template) property.

Inside this template, you can access the [`CurrentPage`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridPageSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridPageSettings_CurrentPage), [`PageSize`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridPageSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridPageSettings_PageSize), [`PageCount`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridPageSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridPageSettings_PageCount), `TotalPage` and `TotalRecordCount` values.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/paging/pager-template/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="PagerTemplate.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/paging/pager-template/pagerTemplate.cs %}
{% endhighlight %}
{% endtabs %}

## Pager with Page Size Dropdown

The pager Dropdown allows you to change the number of records in the TreeGrid dynamically. It can be enabled by defining the [`PageSettings.PageSizes`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridPageSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridPageSettings_PageSizes) property as `true`.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/paging/page-sizes/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="PageSizes.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/paging/page-sizes/pageSizes.cs %}
{% endhighlight %}
{% endtabs %}

![Page size dropdown](images/pagesizes.png)

## How to render Pager at the Top of the TreeGrid

By default, Pager will be rendered at the bottom of the TreeGrid. You can also render the Pager at the top of the TreeGrid by using the `DataBound` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/paging/customize/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Customize.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/paging/customize/customize.cs %}
{% endhighlight %}
{% endtabs %}

N> During the paging action, the pager component triggers the below three events.
<br/> * The `created` event triggers when Pager is created.
<br/> * The `click` event triggers when the numeric items in the pager is clicked.
<br/> * The `dropDownChanged` event triggers when pageSize DropDownList value is selected.