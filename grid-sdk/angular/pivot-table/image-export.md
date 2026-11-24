---
layout: post
title: Image export in Angular Pivot Table | Syncfusion
description: Learn how to export the Angular Pivot Table as a PNG, JPEG or SVG image using the HtmlExport module and the exportToImage method.
control: Pivot Table
platform: grid-sdk
documentation: ug
domainurl: ##DomainURL##
---

# Image Export in Angular Pivot Table

The Angular Pivot Table supports exporting the current visible pivot composition into image formats: **PNG**, **JPEG** and **SVG**. To enable image export, set the `allowImageExport` property to **true** and inject the `HtmlExportService` into the `providers` array of the component. Once enabled, call the `exportToImage` method programmatically, or use the image options in the built-in Toolbar export menu.

In the following example, an external button is used to start the image export. When the button is clicked, the `exportToImage` method is called with the **PNG** format and `ImageExportProperties` so that the Pivot Table is saved as an image.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/getting-started-cs346/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/getting-started-cs346/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/pivot-table/getting-started-cs346" %}

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
