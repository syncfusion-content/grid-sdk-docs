---
layout: post
title: Modules in JavaScript Pivot Table | Syncfusion
description: Learn how to configure JavaScript Pivot Table features such as grouping, field lists, formatting, paging, charts, and data export.
platform: grid-sdk
control: Pivot Table modules
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Modules in JavaScript Pivot Table

The available Pivot Table modules are:

| Feature | Module | Description |
|---------|--------|-------------|
| [Grouping bar](./grouping-bar) | `GroupingBar` | Provides drag-and-drop field arrangement through the [`showGroupingBar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#showgroupingbar) option. Supports relational and OLAP data. |
| [Field list](./field-list) | `FieldList` | Displays the field list using the [`showFieldList`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#showfieldlist) option. Supports relational and OLAP data. |
| [Calculated field](./calculated-field) | `CalculatedField` | Enables calculated fields with [`allowCalculatedField`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#allowcalculatedfield). Relational and OLAP formula syntax differs. |
| [Conditional formatting](./conditional-formatting) | `ConditionalFormatting` | Enables conditional formatting with [`allowConditionalFormatting`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#allowconditionalformatting). Supports relational and OLAP data. |
| [Number formatting](../number-formatting) | `NumberFormatting` | Enables runtime number formatting with [`allowNumberFormatting`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#allownumberformatting). Supports relational and OLAP data. |
| [Grouping](./grouping) | `Grouping` | Groups date, number, and string fields with [`allowGrouping`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#allowgrouping). Applies to relational data. |
| [Drill through](./drill-through) | `DrillThrough` | Shows underlying records for an aggregated value with [`allowDrillThrough`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#allowdrillthrough). OLAP access depends on cube permissions. |
| [Toolbar](./tool-bar) | `Toolbar` | Displays toolbar commands when [`showToolbar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#showtoolbar) is enabled and commands are specified through [`toolbar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#toolbar). Supports relational and OLAP data. |
| [Pivot Chart](./pivot-chart) | `PivotChart` | Displays the chart with the grid according to [`displayOption`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/displayOptionModel), and configures it through [`chartSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#chartsettings) and [`chartSeries`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/pivotSeriesModel). Supports relational and OLAP data. |
| [Virtual scrolling](./virtual-scrolling) | `VirtualScroll` | Renders visible rows and columns for large reports with [`enableVirtualization`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#enablevirtualization). Supports relational and OLAP data. |
| [Paging](./paging) | `Pager` | Divides large reports into pages using [`enablePaging`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#enablepaging), configured through [`pageSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#pagesettings) and [`pagerSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#pagersettings). Supports relational and OLAP data. |
| [Excel and CSV export](./excel-export) | `ExcelExport` | Enables Excel and CSV export with [`allowExcelExport`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#allowexcelexport). Supports relational and OLAP data. |
| [PDF export](./pdf-export) | `PDFExport` | Enables PDF export with [`allowPdfExport`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#allowpdfexport). Supports relational and OLAP data. |

## Module relationships and limitations

Some modules can be used independently, while others are commonly combined:

* `Toolbar` provides the toolbar UI. Enable the corresponding feature for toolbar commands such as Excel/PDF export, conditional formatting, number formatting, calculated fields, or Pivot Chart.
* `FieldList` enables the field list hosted by the `PivotView` component. A stand-alone field list is rendered with `PivotFieldList`; it is a component rather than an additional feature module. Field list commands use their corresponding feature options.
* `Pager` and `VirtualScroll` are alternative large-data rendering strategies; do not enable paging and virtualization together.
* `Grouping` applies to relational data. OLAP grouping and calculations are defined by the cube and use OLAP-specific report settings.
* `DrillThrough` can expose source records. The application and data service must authorize access to those records independently of the Pivot Table UI.

## Enabling basic features

The following example enables the grouping bar, field list, and calculated field features by setting their corresponding Pivot Table options.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/module-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/module-cs1/js/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/module-cs1/js" %}
