---
layout: post
title: Exporting grid in cordova application in Vue Grid component | Syncfusion
description: Learn here all about Exporting grid in cordova application in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Exporting grid in cordova application 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Exporting grid in cordova application in Vue Grid component

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