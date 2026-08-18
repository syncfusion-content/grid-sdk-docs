---
layout: post
title: Exporting grid in cordova application in JavaScript Grid control | Syncfusion
description: Learn here all about Exporting grid in cordova application in Syncfusion JavaScript Grid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Exporting grid in cordova application 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Exporting grid in cordova application in JavaScript Grid control

Exporting the JavaScript Grid in a Cordova application can be beneficial in various scenarios where users need to generate and download reports, share data in Excel or PDF formats, or archive information for offline use. A Cordova application does not support direct file download. To export the JavaScript Grid component in a Cordova application, you need to utilize Blob streams. This can be achieved by using the appropriate exporting methods and export complete events to obtain the Blob stream.

The following example illustrates how to export a JavaScript Grid in a Cordova application. It utilizes the [excelExportComplete](../../api/grid/#excelexportcomplete) and [pdfExportComplete](../../api/grid/#pdfexportcomplete) events to manage the export process for Excel and PDF formats and obtain the Blob stream. The `exportBlob` function is responsible for creating a downloadable link for the exported file.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/exporting-blob-data-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/exporting-blob-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/exporting-blob-data-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/exporting-blob-data-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/exporting-blob-data-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/exporting-blob-data-cs2" %}
{% endif %}
