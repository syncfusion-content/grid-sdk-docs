---
layout: post
title: TypeScript TreeGrid Show Spinner While Exporting | Syncfusion
description: Learn how to display a loading spinner during export operations in TypeScript TreeGrid to provide visual feedback and improve user experience.
platform: grid-sdk
control: Show spinner while exporting
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Show Spinner While Exporting in TypeScript TreeGrid

You can show/ hide spinner component while exporting the Tree Grid using [`showSpinner`](https://ej2.syncfusion.com/documentation/api/treegrid#showspinner)/ [`hideSpinner`](https://ej2.syncfusion.com/documentation/api/treegrid#hidespinner) methods. You can use  [`toolbarClick`](https://ej2.syncfusion.com/documentation/api/treegrid#toolbarclick) event to show spinner before exporting and hide a spinner in the [`pdfExportComplete`](https://ej2.syncfusion.com/documentation/api/treegrid#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/documentation/api/treegrid#excelexportcomplete) event after the exporting.

In the [`toolbarClick`](https://ej2.syncfusion.com/documentation/api/grid#toolbarclick) event, based on the parameter **args.item.text** as **PDF Export** or **Excel Export** we can call the [`showSpinner`](https://ej2.syncfusion.com/documentation/api/treegrid#showspinner) method from Tree Grid instance.

In the [`pdfExportComplete`](https://ej2.syncfusion.com/documentation/api/treegrid#pdfexportcomplete) or [`excelExportComplete`](https://ej2.syncfusion.com/documentation/api/treegrid#excelexportcomplete) event, We can call the [`hideSpinner`](https://ej2.syncfusion.com/documentation/api/treegrid#hidespinner) method.

In the below demo, we have rendered the default spinner component when exporting the Tree Grid.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/show-spinner-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/show-spinner-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/show-spinner-cs1" %}


> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.