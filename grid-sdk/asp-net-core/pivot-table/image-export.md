---
layout: post
title: Image export in ASP.NET Core Pivot Table | Syncfusion
description: Learn how to export the ASP.NET Core Pivot Table as a PNG, JPEG or SVG image using the HtmlExport module and the exportToImage method.
control: Pivot Table
platform: grid-sdk
documentation: ug
domainurl: ##DomainURL##
---

# Image Export in ASP.NET Core Pivot Table

The ASP.NET Core Pivot Table supports exporting the current visible pivot composition into image formats: **PNG**, **JPEG** and **SVG**. To enable image export, set the `allowImageExport` property to **true** to enable the `HtmlExport` module. Once enabled, call the `exportToImage` method programmatically, or use the image options in the built-in Toolbar export menu.

In the following example, an external button is used to start the image export. When the button is clicked, the `exportToImage` method is called with the **PNG** format and `ImageExportProperties` so that the Pivot Table is saved as an image.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/image-export/export/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Export.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/pivot-table/image-export/export/Export.cs %}
{% endhighlight %}
{% endtabs %}

## exportToImage method

The `exportToImage(format, properties, isBlob)` method returns a `Promise` that resolves to the exported image. It accepts the following parameters:

| Parameter | Type | Description |
|-----------|------|-------------|
| `format` | `'PNG' \| 'JPEG' \| 'SVG'` | Defines the image file format. |
| `properties` | `ImageExportProperties` | Optional. An object that customizes the export. |
| `isBlob` | `boolean` | Optional. When set to **true**, the method returns a `Promise` resolving to the image Blob or data string instead of downloading it directly. |

The `ImageExportProperties` object supports the following options:

| Property | Type | Description |
|----------|------|-------------|
| `fileName` | `string` | Specifies the output image file name, for example `'PivotTable.png'`. |
| `quality` | `number` | A number between 0 and 1 that specifies the image quality. Applicable for the **JPEG** format. |
| `scale` | `number` | A scaling factor for high-resolution rendering. |
| `backgroundColor` | `string` | Defines the background color of the exported image, for example `'#ffffff'`. |
