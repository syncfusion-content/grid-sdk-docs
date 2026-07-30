---
layout: post
title: Show spinner while exporting in JavaScript Treegrid control | Syncfusion
description: Learn here all about Show spinner while exporting in Syncfusion JavaScript Treegrid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Show spinner while exporting 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Show spinner while exporting in JavaScript Treegrid control

You can show/ hide spinner component while exporting the Tree Grid using [`showSpinner`](../api/treegrid/#showspinner)/ [`hideSpinner`](../api/treegrid/#hidespinner) methods. You can use  [`toolbarClick`](../api/treegrid/#toolbarclick) event to show spinner before exporting and hide a spinner in the [`pdfExportComplete`](../api/treegrid/#pdfexportcomplete) or [`excelExportComplete`](../api/treegrid/#excelexportcomplete) event after the exporting.

In the [`toolbarClick`](../../api/grid/#toolbarclick) event, based on the parameter **args.item.text** as **PDF Export** or **Excel Export** we can call the [`showSpinner`](../api/treegrid/#showspinner) method from Tree Grid instance.

In the [`pdfExportComplete`](../api/treegrid/#pdfexportcomplete) or [`excelExportComplete`](../api/treegrid/#excelexportcomplete) event, We can call the [`hideSpinner`](../api/treegrid/#hidespinner) method.

In the below demo, we have rendered the default spinner component when exporting the Tree Grid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/show-spinner-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/show-spinner-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/show-spinner-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/show-spinner-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/show-spinner-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/show-spinner-cs1" %}
{% endif %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.