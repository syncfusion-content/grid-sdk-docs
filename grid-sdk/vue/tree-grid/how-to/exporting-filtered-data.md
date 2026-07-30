---
layout: post
title: Exporting filtered data in Vue Treegrid component | Syncfusion
description: Learn here all about Exporting filtered data in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Exporting filtered data 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Exporting filtered data in Vue Treegrid component

You can export the filtered data by defining the resulted data in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/#datasource) before export.

In the below Pdf exporting demo, We have gotten the filtered data from the filteredResult of Tree Grid filterModule and then defines the resulted data in [`PdfExportProperties.dataSource`](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfExportProperties/#datasource) and pass it to [`pdfExport`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#pdfexport) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/how-to/default-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/how-to/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/how-to/default-cs13" %}