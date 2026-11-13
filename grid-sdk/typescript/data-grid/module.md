---
layout: post
title: Module in TypeScript Grid control | Syncfusion
description: Learn here all about Module in Syncfusion TypeScript Grid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Module 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Modules in TypeScript Grid control

Syncfusion TypeScript Grid modules help optimize your application’s bundle size by including only the features you need. To enable a specific Grid feature, import and inject the corresponding Feature Module into your Grid configuration.

The available Grid modules are:

| Feature | Module | Description |
|---------|--------|-------------|
| [Page](./paging) | `Page` | Inject this module to use paging feature. |
| [Sort](./sorting.md) | `Sort` | Inject this module to use sorting feature. |
| [Filter](././filtering/filtering) | `Filter` | Inject this module to use filtering feature. |
| [AdvancedFilter](././filtering/advanced-filter)| Inject this module to use advanced filtering feature. |
| [Group](././grouping/grouping) | `Group` | Inject this module to use grouping feature. |
| [LazyLoadGroup](././grouping/lazy-load-grouping) | `LazyLoadGroup` | Inject this module to use lazy load grouping feature. |
| [Edit](././editing/edit) | `Edit` | Inject this module to use editing feature. |
| [Formula](././formula/formula) | `Formula` | Inject this module to use formula feature. |
| [Aggregate](././aggregates/aggregates) | `Aggregate` | Inject this module to use aggregate feature. |
| [ColumnChooser](././columns/column-chooser) | `ColumnChooser` | Inject this module to use column chooser feature. |
| [ColumnMenu](././columns/column-menu) | `ColumnMenu` | Inject this module to use column menu feature. |
| [CommandColumn](././editing/command-column-editing) | `CommandColumn` | Inject this module to use command column feature. |
| [ContextMenu](./context-menu) | `ContextMenu` | Inject this module to use context menu feature. |
| [DetailRow](././row/detail-template) | `DetailRow` | Inject this module to use detail template feature. |
| [ForeignKey](././columns/foreign-key-column) | `ForeignKey` | Inject this module to use foreign key feature. |
| [Freeze](././columns/frozen-column) | `Freeze` | Inject this module to use frozen rows and columns feature. |
| [Resize](././columns/column-resizing) | `Resize` | Inject this module to use resize feature. |
| [Reorder](././columns/column-reorder) | `Reorder` | Inject this module to use reorder feature. |
| [RowDD](././row/row-drag-and-drop) | `RowDD` | Inject this module to use row drag and drop feature. |
| [Search](./searching) | `Search` | Inject this module to use search feature and this is a default injected module. |
| [Selection](././selection/selection) | `Selection` | Inject this module to use selection feature and this is a default injected module. |
| [VirtualScroll](././scrolling/virtual-scrolling) | `VirtualScroll` | Inject this module to use virtual scrolling feature. |
| [InfiniteScroll](././scrolling/infinite-scrolling) | `InfiniteScroll` | Inject this module to use infinite scrolling feature. |
| [Toolbar](././tool-bar/tool-bar) | `Toolbar` | Inject this module to use toolbar feature. |
| [ExcelExport](././excel-export/excel-exporting) | `ExcelExport` | Inject this module to use excel export feature. |
| [PdfExport](././pdf-export/pdf-export) | `PdfExport` | Inject this module to use PDF export feature. |

## Enabling basic features

The following example demonstrates how to enable basic features such as Paging, Sorting, Filtering, Toolbar and Editing by importing required modules from `@syncfusion/ej2-grids` and injecting them into the grid component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/modules-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/modules-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/modules-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/modules-cs1" %}
