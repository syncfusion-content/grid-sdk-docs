---
layout: post
title: Module in TypeScript Grid control | Syncfusion
description: Learn here all about Module in Syncfusion TypeScript Grid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Module 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Modules in TypeScript Grid control

Syncfusion TypeScript Grid modules help optimize your application’s bundle size by including only the features you need. To enable a specific Grid feature, import and inject the corresponding Feature Module into your Grid configuration.

The available Grid modules are:

| Feature | Module | Description |
|---------|--------|-------------|
| [Page](../api/grid/page) | `Page` | Inject this module to use paging feature. |
| [Sort](../api/grid/sort) | `Sort` | Inject this module to use sorting feature. |
| [Filter](../api/grid/filter) | `Filter` | Inject this module to use filtering feature. |
| [Group](../api/grid/group) | `Group` | Inject this module to use grouping feature. |
| [LazyLoadGroup](../api/grid/lazyLoadGroup) | `LazyLoadGroup` | Inject this module to use lazy load grouping feature. |
| [Edit](../api/grid/edit) | `Edit` | Inject this module to use editing feature. |
| [Aggregate](../api/grid/aggregate) | `Aggregate` | Inject this module to use aggregate feature. |
| [ColumnChooser](../api/grid/columnChooser) | `ColumnChooser` | Inject this module to use column chooser feature. |
| [ColumnMenu](../api/grid/columnmenumodule) | `ColumnMenu` | Inject this module to use column menu feature. |
| [CommandColumn](../api/grid/commandColumn) | `CommandColumn` | Inject this module to use command column feature. |
| [ContextMenu](../api/grid/contextMenu) | `ContextMenu` | Inject this module to use context menu feature. |
| [DetailRow](../api/grid/detailRow) | `DetailRow` | Inject this module to use detail template feature. |
| [ForeignKey](../api/grid/foreignkey) | `ForeignKey` | Inject this module to use foreign key feature. |
| [Freeze](../api/grid/freeze) | `Freeze` | Inject this module to use frozen rows and columns feature. |
| [Resize](../api/grid/resize) | `Resize` | Inject this module to use resize feature. |
| [Reorder](../api/grid/reorder) | `Reorder` | Inject this module to use reorder feature. |
| [RowDD](../api/grid/rowdd) | `RowDD` | Inject this module to use row drag and drop feature. |
| [Search](../api/grid/search) | `Search` | Inject this module to use search feature and this is a default injected module. |
| [Selection](../api/grid/selection) | `Selection` | Inject this module to use selection feature and this is a default injected module. |
| [VirtualScroll](../api/grid/virtualscroll) | `VirtualScroll` | Inject this module to use virtual scrolling feature. |
| [InfiniteScroll](../api/grid/infinitescroll) | `InfiniteScroll` | Inject this module to use infinite scrolling feature. |
| [Toolbar](../api/grid/toolbarmodule) | `Toolbar` | Inject this module to use toolbar feature. |
| [ExcelExport](../api/grid/excelexportmodule) | `ExcelExport` | Inject this module to use excel export feature. |
| [PdfExport](../api/grid/pdfexportmodule) | `PdfExport` | Inject this module to use PDF export feature. |

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
