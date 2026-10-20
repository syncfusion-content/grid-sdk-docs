---
layout: post
title: Modules in TypeScript Pivot Table | Syncfusion
description: Learn about TypeScript Pivot Table feature modules, their API configuration, and how to inject modules into a Pivot Table.
platform: grid-sdk
control: Pivot Table modules
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Modules in TypeScript Pivot Table

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript Pivot Table provides optional modules for features that are not part of its core rendering behavior. Import and inject only the modules required by the report. This keeps the component configuration explicit and avoids registering unused features.

Import a module from `@syncfusion/ej2-pivotview`, register it through `PivotView.Inject`, and configure the associated component property when one is required. The following table lists all injectable Pivot Table modules exported by the package and links each module's related configuration to its API reference.

| Feature | Module | Related configuration | Data source support |
| --- | --- | --- | --- |
| [Grouping bar](./grouping-bar) | `GroupingBar` | [`showGroupingBar`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#showgroupingbar) | Relational and OLAP |
| [Field list](./field-list) | `FieldList` | [`showFieldList`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#showfieldlist) | Relational and OLAP |
| [Calculated field](./calculated-field) | `CalculatedField` | [`allowCalculatedField`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#allowcalculatedfield) | Relational and OLAP; formula syntax differs |
| [Conditional formatting](./conditional-formatting) | `ConditionalFormatting` | [`allowConditionalFormatting`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#allowconditionalformatting) | Relational and OLAP |
| [Number formatting](./number-formatting) | `NumberFormatting` | [`allowNumberFormatting`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#allownumberformatting) | Relational and OLAP |
| [Grouping](./grouping) | `Grouping` | [`allowGrouping`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#allowgrouping) | Relational |
| [Drill through](./drill-through) | `DrillThrough` | [`allowDrillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#allowdrillthrough) | Relational and OLAP; OLAP access depends on cube permissions |
| [Toolbar](./tool-bar) | `Toolbar` | [`showToolbar`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#showtoolbar) and [`toolbar`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#toolbar) | Relational and OLAP |
| [Pivot Chart](./pivot-chart) | `PivotChart` | [`displayOption`](https://ej2.syncfusion.com/documentation/api/pivotview/displayOptionModel), [`chartSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#chartsettings), and [`chartSeries`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSeriesModel) | Relational and OLAP |
| [Virtual scrolling](./virtual-scrolling) | `VirtualScroll` | [`enableVirtualization`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#enablevirtualization) | Relational and OLAP |
| [Paging](./paging) | `Pager` | [`enablePaging`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#enablepaging), [`pageSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#pagesettings), and [`pagerSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#pagersettings) | Relational data only |
| [Excel and CSV export](./excel-export) | `ExcelExport` | [`allowExcelExport`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#allowexcelexport) | Relational and OLAP |
| [PDF export](./pdf-export) | `PDFExport` | [`allowPdfExport`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#allowpdfexport) | Relational and OLAP |

> Importing a module alone does not enable its feature. Inject the module and configure the related property. Features without a module, including core aggregation, member filtering, sorting, drill down, and value sorting, do not need to be passed to `PivotView.Inject`.

## Module relationships and limitations

Some modules can be used independently, while others are commonly combined:

* `Toolbar` provides the toolbar UI. Inject the feature module for a toolbar command that uses an optional feature, such as `ExcelExport`, `PDFExport`, `ConditionalFormatting`, `NumberFormatting`, `CalculatedField`, or `PivotChart`.
* `FieldList` enables the field list hosted by the `PivotView` component. The stand-alone field list is rendered with `PivotFieldList`; it is a component rather than an additional injectable module. Inject other optional modules that its enabled commands use.
* `Pager` and `VirtualScroll` are alternative large-data rendering strategies and must not be enabled together.
* `Grouping` applies to relational data. OLAP grouping and calculations are defined by the cube and use OLAP-specific report settings.
* `DrillThrough` can expose source records. The application and data service must authorize access to those records independently of the Pivot Table UI.

## Complete module import reference

The following import lists all injectable Pivot Table modules. In an application, retain only the modules used by that Pivot Table instance and pass them to `PivotView.Inject`.

```ts
import {
    CalculatedField,
    ConditionalFormatting,
    DrillThrough,
    ExcelExport,
    FieldList,
    Grouping,
    GroupingBar,
    NumberFormatting,
    Pager,
    PDFExport,
    PivotChart,
    Toolbar,
    VirtualScroll
} from '@syncfusion/ej2-pivotview';
```

## Enabling basic features

The following example enables the grouping bar, field list, and calculated field features in the TypeScript Pivot Table. It imports the required modules from `@syncfusion/ej2-pivotview`, configures the associated feature properties, and registers the modules with `PivotView.Inject`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/module-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/module-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/pivot-table/module-cs1" %}
