---
layout: post
title: Print in ASP.NET Core Pivot Table | Syncfusion
description: Learn how the ASP.NET Core Pivot Table prints the current pivot report (table or chart) by invoking the print method on the underlying Grid or Chart component.
platform: grid-sdk
control: Print 
documentation: ug
publishingplatform: ##Platform_Name##
---

# Print in ASP.NET Core Pivot Table

The React Pivot Table component supports print functionality, allowing users to print the current state of the pivot table or pivot chart. This feature enables users to generate hard copies of pivot table reports for convenient review and data sharing.

## Print pivot table

The rendered pivot table can be printed by invoking the `print` method from the underlying [`Grid`](https://help.syncfusion.com/grid-sdk/asp-net-core/data-grid/getting-started-core) component instance. The [`Grid`](https://help.syncfusion.com/grid-sdk/asp-net-core/data-grid/getting-started-core) control manages the print functionality and captures the current state of the pivot table, including all applied filters, sorting, and formatting. The sample code below demonstrates how to trigger the print operation using an external button click.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/print/print-table/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="PrintTable.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/print/print-table/PrintTable.cs %}
{% endhighlight %}
{% endtabs %}

## Print pivot chart

To print the pivot chart, use the `print` method from the underlying [`Chart`](https://help.syncfusion.com/chart-sdk/asp-net-core/charts/getting-started) component instance. The [`Chart`](https://help.syncfusion.com/chart-sdk/asp-net-core/charts/getting-started) control manages the print functionality and preserves all visual elements, including colors, legends, and data labels, in the printed output.

> To use pivot chart functionality, inject the `PivotChart` module into the pivot table.

> To display the pivot chart, set the [`e-displayOption`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PivotView.PivotViewDisplayOption.html) property to either **Chart** or **Both**.

The sample code below illustrates how to print the pivot chart through an external button click.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/print/print-chart/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="PrintChart.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/print/print-chart/PrintChart.cs %}
{% endhighlight %}
{% endtabs %}
