---
layout: post
title: ASP.NET Core Grid Advanced Filter | Syncfusion
description: Learn how to use Advanced Filter in ASP.NET Core Data Grid with Query Builder, multiple conditions, and logical operators.
platform: grid-sdk
control: Advanced Filter
documentation: ug
---

# Advanced Filtering in ASP.NET Core Data Grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides advanced filtering functionality through the Query Builder interface, which enables the creation of complex filtering conditions with multiple criteria and logical operators.

## Enable advanced filtering

Advanced filtering is enabled by setting the `allowAdvancedFiltering` property to `true`. This adds an **Filter** button to the toolbar, which opens the Query Builder dialog for creating advanced filter conditions.

To use advanced filtering, inject the [AdvancedFilter](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html) module into the Grid along with the other required modules.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/filtering/advanced-filter-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="excelfilter.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/filtering/advanced-filter-cs1/advancedfilter.cs %}
{% endhighlight %}
{% endtabs %}

## Initial filter

Initial filter conditions can be set and applied automatically when the Grid loads. The `advancedFilterSettings` property with `queryBuilderSettings` is used to define the initial rule.

The following example demonstrates displaying only tickets with a priority of **High** and a status other than **Done**.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/filtering/advanced-filter-cs2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="excelfilter.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/filtering/advanced-filter-cs2/advancedfilter.cs %}
{% endhighlight %}
{% endtabs %}

> By default, hidden columns are not included in the advanced filter builder. Setting `advancedFilterSettings.includeHiddenColumns` to `true` displays hidden columns in the Query Builder, enabling filter conditions to be created using their values.

## Advanced filtering events

The Advanced Filter feature provides the following events for customizing the dialog and filter operations.

1. The [advancedFilterOpen](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html#Syncfusion_EJ2_Grids_Grid_AdvancedFilterOpen) event is triggered when the Advanced Filter dialog opens. The event arguments provide access to the dialog and Query Builder instances.
2. The [advancedFilterClose](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html#Syncfusion_EJ2_Grids_Grid_AdvancedFilterClose) event is triggered when the Advanced Filter dialog closes. Set the `cancel` property to `true` to prevent the dialog from closing.
3. The [advancedFilterActionBegin](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html#Syncfusion_EJ2_Grids_Grid_AdvancedFilterActionBegin) event is triggered before a filter is applied or cleared. Set the `cancel` property to `true` to prevent the operation. The event arguments include the filter rule, dialog instance, and Query Builder instance.
4. The [advancedFilterActionComplete](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html#Syncfusion_EJ2_Grids_Grid_AdvancedFilterActionComplete) event is triggered after a filter is applied or cleared. Set the `cancel` property to `true` to keep the Advanced Filter dialog open after the operation.

## Methods

The Advanced Filter feature provides the following methods for controlling the dialog and managing filter rules programmatically:

1. The [openAdvancedFilterDialog](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html#Syncfusion_EJ2_Grids_Grid_OpenAdvancedFilterDialog) method opens the Advanced Filter dialog.
2. The [closeAdvancedFilterDialog](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html#Syncfusion_EJ2_Grids_Grid_CloseAdvancedFilterDialog) method closes the Advanced Filter dialog.
3. The [applyAdvancedFilter](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html#Syncfusion_EJ2_Grids_Grid_ApplyAdvancedFilter) method applies the specified filter rule to the Grid.
4. The [clearAdvancedFilter](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html#Syncfusion_EJ2_Grids_Grid_ClearAdvancedFilter) method clears the applied Advanced Filter and restores the original data view.
5. The [getAdvancedFilter](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html#Syncfusion_EJ2_Grids_Grid_GetAdvancedFilter) method retrieves the currently configured filter rule.
6. The [setAdvancedFilter](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Grids.Grid.html#Syncfusion_EJ2_Grids_Grid_SetAdvancedFilter) method sets the specified rule as the current rule configuration in the Advanced Filter Query Builder.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/filtering/advanced-filter-cs3/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="excelfilter.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/grid/filtering/advanced-filter-cs3/advancedfilter.cs %}
{% endhighlight %}
{% endtabs %}
