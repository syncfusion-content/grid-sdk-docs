---
layout: post
title: HTML export in JavaScript Pivot Table | Syncfusion
description: Learn how to export the JavaScript Pivot Table to a standalone HTML file using the HtmlExport module and the exportToHTML method.
control: Pivot Table
platform: grid-sdk
documentation: ug
domainurl: ##DomainURL##
---

# HTML Export in JavaScript Pivot Table

The JavaScript Pivot Table allows exporting the rendered table view into a standalone HTML file. To enable HTML export, set the `allowHtmlExport` property to **true**. The `HtmlExport` module is included in the Syncfusion script bundle used by the sample. Once enabled, call the `exportToHTML` method programmatically, or use the HTML option in the built-in Toolbar export menu.

In the following example, an external button is used to start the HTML export. When the button is clicked, the `exportToHTML` method is called with `HtmlExportProperties` so that the Pivot Table is saved as an HTML file.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/html-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/html-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/html-export-cs1" %}

## exportToHTML method

The `exportToHTML(properties, isBlob)` method returns a `Promise` that resolves to the exported HTML content. It accepts the following parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `properties` | `HtmlExportProperties` | Optional. An object that customizes the export. |
| `isBlob` | `boolean` | Optional. When set to **true**, the method returns a `Promise` containing the Blob or HTML string instead of triggering a direct browser download. |

The `HtmlExportProperties` object supports the following options:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `fileName` | `string` | - | Specifies the file name of the downloaded HTML file, for example `'PivotTable.html'`. |
| `title` | `string` | - | Sets the `<title>` tag of the exported HTML document. |
| `includeStyles` | `boolean` | `true` | Indicates whether the inline CSS styles of the Pivot Table are included in the exported file. |
