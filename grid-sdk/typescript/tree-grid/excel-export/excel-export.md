---
layout: post
title: TypeScript TreeGrid Excel Export | Syncfusion
description: Learn how to export data from TypeScript TreeGrid to Excel, including export customization, selected records, and advanced export options.
platform: grid-sdk
control: Excel export
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Excel Export in TypeScript TreeGrid

The excel export allows exporting TreeGrid data to Excel document. You need to use the [`excelExport`](https://ej2.syncfusion.com/documentation/api/treegrid#excelexport) method for exporting. To enable Excel export in the treegrid, set the [`allowExcelExport`](https://ej2.syncfusion.com/documentation/api/treegrid#allowexcelexport-boolean) as true.

To use excel export, You need to inject the `ExcelExport` module in treegrid.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/excel-export-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/excel-export-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/excel-export-cs7" %}


## Persist collapsed state

You can persist the collapsed state in the exported document by defining `isCollapsedStatePersist` property as true in `TreeGridExcelExportProperties` parameter of  [`excelExport`](https://ej2.syncfusion.com/documentation/api/treegrid#excelexport) method.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/excel-export-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/excel-export-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/excel-export-cs8" %}


## Custom data source

The excel export provides an option to define datasource dynamically before exporting. To export data dynamically, define the `dataSource` in `exportProperties`.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/excel-export-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/excel-export-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/excel-export-cs9" %}


## Exporting custom aggregates in TreeGrid  

The TreeGrid enables exporting custom aggregates, which summarize column data, to an Excel document using the `excelAggregateQueryCellInfo` event.  
 
In the provided example, the `customAggregateFn` function computes the item count for a selected category, while the `excelAggregateQueryCellInfo` event customizes the exported cell values in the Excel document.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/custom-aggregates-excel/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/custom-aggregates-excel/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/custom-aggregates-excel" %}



> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.