---
layout: post
title: Vue Grid Cordova Export Support | Syncfusion
description: Learn how to export Vue Data Grid data in Cordova applications using Blob streams, Excel and PDF export events, and mobile-friendly file handling.
control: Exporting grid in cordova application 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Cordova Export in Vue Data Grid

Exporting the [Vue Data Grid](https://www.syncfusion.com/vue-components/vue-grid) in a Cordova application can be beneficial in various scenarios where users need to generate and download reports, share data in Excel or PDF formats, or archive information for offline use. A Cordova application does not support direct file download. To export the Vue Data Grid component in a Cordova application, you need to utilize Blob streams. This can be achieved by using the appropriate exporting methods and export complete events to obtain the Blob stream.

The following example illustrates how to export a Vue Data Grid in a Cordova application. It utilizes the [excelExportComplete](https://ej2.syncfusion.com/documentation/api/grid/#excelexportcomplete) and [pdfExportComplete](https://ej2.syncfusion.com/documentation/api/grid/#pdfexportcomplete) events to manage the export process for Excel and PDF formats and obtain the Blob stream. The `exportBlob` function is responsible for creating a downloadable link for the exported file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/how-to/foreignKey-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/grid/how-to/foreignKey-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/grid/how-to/foreignKey-cs8" %}