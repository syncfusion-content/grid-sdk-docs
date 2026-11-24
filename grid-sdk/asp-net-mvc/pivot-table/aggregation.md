---
layout: post
title: Aggregation in ASP.NET MVC Pivot Table | Syncfusion
description: Learn how the ASP.NET MVC Pivot Table performs value-axis aggregations like Sum, Avg, Min, Max, Count, and DifferenceFrom on relational data.
platform: grid-sdk
control: Aggregation
documentation: ug
---


# Aggregation in ASP.NET MVC Pivot Table

> This feature is applicable only for the relational data source.

End users can perform calculations on groups of values (specifically for value fields placed in the value axis) by using different aggregation types. By default, values are combined by summing them. Additional aggregation types are described below.

> Numeric fields support all aggregation types listed below, except **CalculatedField**. Date and datetime fields support **Min**, **Max**, **Count**, and **DistinctCount** aggregation. Fields of type string, boolean, and similar types support only [**SummaryTypes.Count**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html) and **DistinctCount** aggregation.

| Operator | Description |
|------|-------------|
| Sum| Displays the total sum for the selected field values.|
| Product| Displays the product of the selected field values.|
| Count| Displays the number of records for the selected field.|
| DistinctCount| Displays the number of unique records for the selected field.|
| Min| Displays the minimum value for the selected field. For date or datetime fields, displays the earliest date or datetime value.|
| Max| Displays the maximum value for the selected field. For date or datetime fields, displays the latest date or datetime value.|
| Avg| Displays the average (mean) of the selected field values.|
| Median| Displays the median value for the selected field.|
| Index| Displays the index value for the selected field data.|
| PopulationStDev| Displays the standard deviation of the population for the selected field.|
| SampleStDev| Displays the sample standard deviation for the selected field.|
| PopulationVar| Displays the variance of the population for the selected field.|
| SampleVar| Displays the sample variance for the selected field.|
| RunningTotals| Displays the running total for the selected field values.|
| PercentageOfRunningTotals| Cumulative percentage of running totals (client-side engine only).|
| DifferenceFrom| Displays the difference relative to a specific base item or adjacent member (`'(previous)'` / `'(next)'`) in the base field. Configured using `BaseField`, `BaseItem`, and optionally `AllowCrossGroupCalculation`.|
| PercentageOfDifferenceFrom| Displays the percentage difference relative to a specific base item or adjacent member (`'(previous)'` / `'(next)'`) in the base field. Configured using `BaseField`, `BaseItem`, and optionally `AllowCrossGroupCalculation`.|
| PercentageOfGrandTotal| Displays the pivot table values with percentage of grand total of all values.|
| PercentageOfColumnTotal| Displays the pivot table values in each column with percentage of total values for the column.|
| PercentageOfRowTotal| Displays the pivot table values in each row with percentage of total values for the row.|
| PercentageOfParentTotal| Displays the pivot table values with percentage of total of all values based on selected field.|
| PercentageOfParentColumnTotal| Displays the pivot table values with percentage of its parent total in each column.|
| PercentageOfParentRowTotal| Displays the pivot table values with percentage of its parent total in each row.|
| CalculatedField| Displays the pivot table with calculated field values. It allows user to create a new calculated field alone.|

## Assigning aggregation type for value fields through API

For each value field, the aggregation type can be set using the property [`Type`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewRow.html#Syncfusion_EJ2_PivotView_PivotViewRow_Type) in [`Value`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.ValuesDataSourceSettings.html). Meanwhile, aggregation types like [**SummaryTypes.DifferenceFrom**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html) and [**SummaryTypes.PercentageOfDifferenceFrom**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html) can check for specific field of specific item using [`BaseField`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewRow.html#Syncfusion_EJ2_PivotView_PivotViewRow_BaseField) and [`BaseItem`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewRow.html#Syncfusion_EJ2_PivotView_PivotViewRow_BaseItem) properties. Likewise, [**SummaryTypes.PercentageOfParentTotal**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html) type can for specific field using [`BaseField`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewRow.html#Syncfusion_EJ2_PivotView_PivotViewRow_BaseField) property. For instance, the aggregation type [**SummaryTypes.DifferenceFrom**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html) would intake the specified field and its corresponding member as input and its value is compared across other members in the same field and also across different fields to formulate an appropriate output value.  

| Property | Applicable Types | Description |
|---|---|---|
| [`Type`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewRow.html#Syncfusion_EJ2_PivotView_PivotViewRow_Type) | All | Specifies the aggregation function to apply. |
| [`BaseField`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewRow.html#Syncfusion_EJ2_PivotView_PivotViewRow_BaseField) | [**SummaryTypes.DifferenceFrom**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html), [**SummaryTypes.PercentageOfDifferenceFrom**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html), [**SummaryTypes.PercentageOfParentTotal**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html) | Specifies the reference field to aggregate against. |
| [`BaseItem`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewRow.html#Syncfusion_EJ2_PivotView_PivotViewRow_BaseItem) | [**SummaryTypes.DifferenceFrom**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html), [**SummaryTypes.PercentageOfDifferenceFrom**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html) | Specifies the reference member name, or dynamic adjacent tokens (`'(previous)'` / `'(next)'`). |
| `AllowCrossGroupCalculation` | [**SummaryTypes.DifferenceFrom**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html), [**SummaryTypes.PercentageOfDifferenceFrom**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html) | When using adjacent tokens, determines whether difference calculation continues across parent group boundaries (`true`) or resets within each group (`false`). |

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/aggregation/aggregation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Aggregation.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/aggregation/aggregation/aggregation.cs %}
{% endhighlight %}
{% endtabs %}

![DifferenceFrom aggregation type](images/aggregation_differencefrom.png)


> By default, the aggregation will be considered as [**SummaryTypes.Sum**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html) to the value fields which had number type and for the value fields which had non-number type values such as string, date, datetime, boolean, etc., the aggregation type will be considered as [**SummaryTypes.Count**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html).

## Modifying aggregation type for value fields at runtime

You can dynamically modify the aggregation type for value fields in the Pivot Table component through the UI at runtime. Value fields, displayed in the grouping bar and field list, include a dropdown icon that allows you to select from various aggregation types (e.g., [**SummaryTypes.Sum**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html), **Average**, [**SummaryTypes.Count**](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.SummaryTypes.html)). Once you select a new aggregation type, the pivot table updates instantly to reflect the change, providing a seamless experience for data analysis.

<!-- markdownlint-disable MD012 -->
![List of pre-defined aggregation types to be changed via Field List](images/aggregation_fl_menu.png)
<br/>

![List of pre-defined aggregation types to be changed via Grouping Bar](images/aggregation_gb_menu.png)

## Show desired aggregation types in its dropdown menu

By default, the dropdown menu for value fields includes all available aggregation types. However, you can customize this menu to display only specific aggregation types relevant to your application using the [`AggregateTypes`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotView.html#Syncfusion_EJ2_PivotView_PivotView_AggregateTypes) property. This allows you to tailor the user experience by limiting the options to those that best fit your use case.

The following code demonstrates how to configure the pivot table component to display only the **DistinctCount**, **Average**, and **Product** aggregation types in the dropdown menu.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/aggregation/aggregationTypes/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Aggregation.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/aggregation/aggregationTypes/aggregation.cs %}
{% endhighlight %}
{% endtabs %}

![Selective aggregation types in dropdown menu](images/aggregateTypes.png)

## Hiding aggregation type from button text

By default, each field in the value axis is displayed with its name and aggregation type (e.g., "Sum of Units Sold"). To display only the field name (e.g., "Units Sold") and hide the aggregation type, set the [`ShowAggregationOnValueField`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewDataSourceSettings.html#Syncfusion_EJ2_PivotView_PivotViewDataSourceSettings_ShowAggregationOnValueField) property in the [`PivotViewDataSourceSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewDataSourceSettings.html) to **false**.

This customization enhances the clarity of the pivot table’s interface by simplifying the button text, making it more concise and user-friendly.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/aggregation/aggregation-button/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Aggregation.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/aggregation/aggregation-button/aggregation.cs %}
{% endhighlight %}
{% endtabs %}

![Aggregation name hidden in button UI - Field List](images/aggregation_fl_value.png)
<br/>

![Aggregation name hidden in button UI - Grouping Bar](images/aggregation_gb_value.png)

## Hiding aggregation type icon from UI

By default, the dropdown icon to change the aggregation type is visible in the grouping bar. To hide this icon, set the [`ShowValueTypeIcon`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewGroupingBarSettings.html#Syncfusion_EJ2_PivotView_PivotViewGroupingBarSettings_ShowValueTypeIcon) property within [`PivotViewGroupingBarSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotViewGroupingBarSettings.html) to **false**.

> The aggregation type icon can only be hidden in the Grouping Bar, not in the Field List.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/aggregation/aggregation-icon/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Aggregation.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/aggregation/aggregation-icon/aggregation.cs %}
{% endhighlight %}
{% endtabs %}

![Aggregation type icon hidden in Grouping Bar](images/value-type-icon-gb.png)

## Multiple Instances of the Same Field in Values

> This feature is applicable only for relational data sources.

The Pivot Table component supports adding the same field to the `Values` collection of `DataSourceSettings` more than once, with each instance configured independently using a distinct aggregation type and a distinct caption. For example, you can add the **Amount** field twice: one instance aggregated as **Sum of Amount** and another aggregated as **Average of Amount**.

Each instance is treated as a separate configuration and maintains its own:

* Aggregation type (`type`)
* Display caption (`caption`)
* Number format (resolved independently in the number formatting dialog)
* Base field (`baseField`)
* Base item (`baseItem`)

At runtime, every instance is rendered as its own entry in the user interface:

* As a separate button in the Grouping Bar.
* As a separate value column in the Pivot Table.
* As a separate series in the Pivot Chart.

Changing an aggregation type from the context menu in the Grouping Bar only affects the selected instance; other instances of the same field remain unchanged. In the number formatting dialog, each instance is listed and formatted separately. Value sorting, filtering, and conditional formatting always resolve to the selected instance, ensuring that operations on one instance do not impact the others.

Instances can be reordered or removed individually using the Grouping Bar buttons without affecting the other instances of the same field.

The following example demonstrates configuring two instances of the **Amount** field in the `Values` collection, alongside the **Sold** field.

{% tabs %}
{% highlight razor tabtitle="Razor" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/aggregation/multiple-instances/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Aggregation.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/aggregation/multiple-instances/aggregation.cs %}
{% endhighlight %}
{% endtabs %}

## Event

### AggregateCellInfo

The [`AggregateCellInfo`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotView.html#Syncfusion_EJ2_PivotView_PivotView_AggregateCellInfo) event triggers each time a value cell is rendered. This allows users to override the cell's value or skip formatting. The event provides the following parameters:

* `fieldName` - It holds current cell's field name.
* `row` - It holds current cell's row value.
* `column` - It holds current cell's column value.
* `value` - It holds value of current cell.
* `cellSets` - It holds raw data for the aggregated value cell.
* `rowCellType` - It holds row cell type value.
* `columnCellType` - It holds column cell type value.
* `aggregateType` - It holds aggregate type of the cell.
* `skipFormatting` - boolean property, it allows to skip formatting if applied.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/aggregation/aggregation-icon/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Aggregation.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/aggregation/aggregation-icon/aggregation.cs %}
{% endhighlight %}
{% endtabs %}

### ActionBegin

The event [`ActionBegin`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotView.html#Syncfusion_EJ2_PivotView_PivotView_ActionBegin) triggers when clicking and selecting the aggregate type via the dropdown icon in the value field button, which is present in both grouping bar and field list UI. This allows the user to identify the current action being performed at runtime. It has the following parameters:

* `dataSourceSettings`: Contains the current data source settings such as input data source, rows, columns, values, filters, format settings and more.

* `actionName`: Provides the name of the current action initiated. For example, when selecting aggregation, the action name is **Aggregate field**.

* `fieldInfo`: Contains information regarding the selected value field.

> Note: This option applies only to actions performed through the field-based UI, such as filtering, sorting, removing a field from the grouping bar, editing, and changing the aggregation type.

* `cancel`: Allows restricting the current action.

In the following example, an action taken during aggregation type selection via the dropdown icon can be prevented by setting the **args.cancel** option to **true** in the [`ActionBegin`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotView.html#Syncfusion_EJ2_PivotView_PivotView_ActionBegin) event.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/action-event/actionBegin-aggregation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ActionBegin-aggregation.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/action-event/actionBegin-aggregation/actionBegin-aggregation.cs %}
{% endhighlight %}
{% endtabs %}

### ActionComplete

The [`ActionComplete`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotView.html#Syncfusion_EJ2_PivotView_PivotView_ActionComplete) event is triggered when a UI action is completed, such as changing the aggregation type using the dropdown icon in the value field button, available within both the grouping bar and field list user interfaces. This event enables users to identify which UI action has been completed at runtime. The event provides the following parameters:

* `dataSourceSettings`: The current data source settings, including input data source, rows, columns, values, filters, format settings, and related properties.
* `actionName`: Specifies the name of the completed action. For example, after changing the aggregation type, the action name will be **Field aggregated**.
* `fieldInfo`: Contains information about the selected value field.
* `actionInfo`: Defines the unique information about the current UI action performed.

> Note: This event is triggered only when field-based UI actions are performed, such as filtering, sorting, removing a field from the grouping bar, editing, or changing the aggregation type.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/action-event/actionComplete-aggregation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ActionComplete-aggregation.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/action-event/actionComplete-aggregation/actionComplete-aggregation.cs %}
{% endhighlight %}
{% endtabs %}

### ActionFailure

The [`ActionFailure`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PivotView.PivotView.html#Syncfusion_EJ2_PivotView_PivotView_ActionFailure) event is triggered when a UI action fails to produce the expected result. This event provides detailed information about the failure through the following parameters:

* `actionName`: Specifies the name of the failed action. For example, if the failure occurs during aggregation, the action name will be **Aggregate field**.
* `errorInfo`: Contains detailed error information related to the failed UI action.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/action-event/actionFailure-aggregation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ActionFailure-aggregation.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/pivot-table/action-event/actionFailure-aggregation/actionFailure-aggregation.cs %}
{% endhighlight %}
{% endtabs %}
