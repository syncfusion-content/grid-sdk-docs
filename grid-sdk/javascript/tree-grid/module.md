---
layout: post
title: JavaScript TreeGrid Modules | Syncfusion
description: Learn about module injection in JavaScript TreeGrid, including available feature modules, dependencies, and their purposes.
platform: grid-sdk
control: Module
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Modules in JavaScript TreeGrid

The available TreeGrid modules are:

| Feature | Module | Description |
|---------|--------|-------------|
| [`Page`](../treegrid/paging) | `Page` | This module is used for the paging feature. |
| [`Sort`](../treegrid/sorting) | `Sort` | This module is used for the sorting feature.|
| [`Filter`](../treegrid/filtering) | `Filter` | This module is used for the filtering feature.|
| [`Edit`](../treegrid/editing) | `Edit` | This module is used for the editing feature.|
| [`Aggregate`](../treegrid/aggregates) | `Aggregate` | This module is used for the aggregate feature.|
| [`ColumnChooser`](../treegrid/columns/column-chooser) | `ColumnChooser` | This module is used for the column chooser feature.|
| [`ColumnMenu`](../treegrid/columns/column-menu) | `ColumnMenu` | This module is used for the column menu feature.|
| [`CommandColumn`](../treegrid/editing/command-column-editing) | `CommandColumn` | This module is used for the command column feature.|
| [`ContextMenu`](../treegrid/context-menu) | `ContextMenu` | This module is used for the context menu feature.|
| [`Resize`](../treegrid/columns/column-resizing) | `Resize` | This module is used for the resize feature.|
| [`Reorder`](../treegrid/columns/column-reorder) | `Reorder` | This module is used for the reorder feature.|
| [`Print`](../treegrid/print) | `Print` | This module is used for the print feature and this is a default injected module.|
| [`Toolbar`](../treegrid/tool-bar) | `Toolbar` | This module is used for the toolbar feature.|
| [`ExcelExport`](../treegrid/excel-export) | `ExcelExport` | This module is used for the Excel export feature.|
| [`PdfExport`](../treegrid/pdf-export) | `PdfExport` | This module is used for the PDF export feature.|

## Enabling basic features

The following example demonstrates how to enable basic features such as Paging, Sorting, Filtering, Toolbar and Editing in the grid component.

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/module-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/module-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="es5-datasource.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/module-cs1/es5-datasource.js %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/module-cs1" %}