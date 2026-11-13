---
layout: post
title: TypeScript TreeGrid PDF Export | Syncfusion
description: Learn how to enable and use PDF export in the TypeScript TreeGrid, including showing a spinner and providing a custom data source.
platform: grid-sdk
control: Pdf export
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# PDF Export in TypeScript TreeGrid

PDF export allows exporting TreeGrid data to PDF document. You need to use the
 [`pdfExport`](https://ej2.syncfusion.com/documentation/api/treegrid#pdfexport) method for exporting. To enable PDF export in the treegrid, set the [`allowPdfExport`](https://ej2.syncfusion.com/documentation/api/treegrid#allowpdfexport) as true.

To use PDF export, inject the `PdfExport` module in treegrid.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/pdfexport-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/pdfexport-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/pdfexport-cs10" %}


<!-- Multiple exporting

PDF export provides an option for exporting multiple treegrid to same file. In this exported document, each treegrid will be exported to new page of document in same file.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/multiplepdfexport-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/multiplepdfexport-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/multiplepdfexport-cs1" %}


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/pdfexport-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/pdfexport-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/pdfexport-cs11" %}


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/pdfexport-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/pdfexport-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/pdfexport-cs12" %}


## Exporting custom aggregates in TreeGrid
 
The TreeGrid enables exporting custom aggregates, which summarize column data, to an PDF document using the `pdfAggregateQueryCellInfo` event.
 
In the provided example, the `customAggregateFn` function computes the item count for a selected category, while the `pdfAggregateQueryCellInfo` event customizes the exported cell values in the PDF document.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/custom-aggregate-pdf/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/custom-aggregate-pdf/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/custom-aggregate-pdf" %}


> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.