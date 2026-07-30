---
layout: post
title: Module in TypeScript Treegrid control | Syncfusion
description: Learn here all about Module in Syncfusion TypeScript Treegrid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Module 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Module in TypeScript Treegrid control

Syncfusion TypeScript TreeGrid modules help optimize your application’s bundle size by including only the features you need. To enable a specific TreeGrid feature, import and inject the corresponding Feature Module into your TreeGrid configuration.

The available TreeGrid modules are:

| Feature | Module | Description |
|---------|--------|-------------|
| [`Page`](../treegrid/paging) | `Page` | Inject this module to use paging feature.|
| [`Sort`](../treegrid/sorting) | `Sort` | Inject this module to use sorting feature.|
| [`Filter`](../treegrid/filtering) | `Filter` | Inject this module to use filtering feature.|
| [`Edit`](../treegrid/editing) | `Edit` | Inject this module to use editing feature.|
| [`Aggregate`](../treegrid/aggregates) | `Aggregate` | Inject this module to use aggregate feature.|
| [`ColumnChooser`](../api/treegrid/columns/column-chooser) | `ColumnChooser` | Inject this module to use column chooser feature.|
| [`ColumnMenu`](../treegrid/columns/column-menu) | `ColumnMenu` | Inject this module to use column menu feature.|
| [`CommandColumn`](../treegrid/editing/command-column-editing) | `CommandColumn` | Inject this module to use command column feature.|
| [`ContextMenu`](../treegrid/context-menu) | `ContextMenu` | Inject this module to use context menu feature.|
| [`Resize`](../treegrid/columns/column-resizing) | `Resize` | Inject this module to use resize feature.|
| [`Reorder`](../treegrid/columns/column-reorder) | `Reorder` | Inject this module to use reorder feature.|
| [`Print`](../treegrid/print) | `Print` | Inject this module to use print feature and this is a default injected module.|
| [`Toolbar`](../treegrid/tool-bar/tool-bar) | `Toolbar` | Inject this module to use toolbar feature.|
| [`ExcelExport`](../treegrid/excel-export/excel-export) | `ExcelExport` | Inject this module to use Excel export feature.|
| [`PdfExport`](../treegrid/pdf-export/pdf-export) | `PdfExport` | Inject this module to use PDF export feature.|

## Enabling basic features

The following example demonstrates how to enable basic features such as Paging, Sorting, Filtering, Toolbar and Editing by importing required modules from `@syncfusion/ej2-treegrid` and injecting them into the grid component.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/module-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/module-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/module-cs1/datasource.ts %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/module-cs1" %}