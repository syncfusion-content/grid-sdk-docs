---
layout: post
title: ASP.NET MVC TreeGrid Searching | Syncfusion
description: Learn how to enable and customize searching in ASP.NET MVC TreeGrid, including search settings, operators, column-specific search, and advanced options.
platform: grid-sdk
control: Searching
documentation: ug
---


# Searching in ASP.NET MVC TreeGrid

You can search records in a TreeGrid, by using the [`search`](https://ej2.syncfusion.com/documentation/api/treegrid/index-default#search) method with search key as a parameter. This also provides an option to integrate search text box in treegrid's toolbar by adding **search** item to the [`Toolbar`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_Toolbar).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/searching/default-searching/razor %}
{% endhighlight %}
{% highlight c# tabtitle="DefaultSearching.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/searching/default-searching/defaultSearching.cs %}
{% endhighlight %}
{% endtabs %}

## Initial search

To apply search at initial rendering, set the fields, operator, key, and ignoreCase in the [`SearchSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGrid.html#Syncfusion_EJ2_TreeGrid_TreeGrid_SearchSettings).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/searching/initial-search/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Initialsearch.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/searching/initial-search/initialsearch.cs %}
{% endhighlight %}
{% endtabs %}

N> By default, treegrid searches all the bound column values. To customize this behavior define the [`SearchSettings.Fields`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridSearchSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSearchSettings_Fields) property.

## Search operators

The search operator can be defined in the [`Operators`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridSearchSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSearchSettings_Operator) property of [`SearchSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridSearchSettings.html) to configure specific searching.

The following operators are supported in searching:

Operator |Description
-----|-----
startsWith |Checks whether a value begins with the specified value.
endsWith |Checks whether a value ends with the specified value.
contains |Checks whether a value contains the specified value.
equal |Checks whether a value is equal to the specified value.
notEqual |Checks for values not equal to the specified value.

* > By default, the [`Operators`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridSearchSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSearchSettings_Operator) value is **contains**.

## Search by external button

To search treegrid records from an external button, invoke the [`search`](https://ej2.syncfusion.com/documentation/api/treegrid/index-default#search) method.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/searching/search-external/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SearchExternal.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/searching/search-external/searchExternal.cs %}
{% endhighlight %}
{% endtabs %}

## Search specific columns

By default, treegrid searches all visible columns. You can search specific columns by defining the specific column's field names in the [`Fields`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridSearchSettings.html#Syncfusion_EJ2_TreeGrid_TreeGridSearchSettings_Fields) property of [`SearchSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridSearchSettings.html).

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/searching/search-columns/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SearchColumns.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/searching/search-columns/searchColumns.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.