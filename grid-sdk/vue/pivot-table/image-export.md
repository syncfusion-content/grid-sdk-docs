---
layout: post
title: Image export in Vue Pivot Table | Syncfusion
description: Learn how to export the Vue Pivot Table as a PNG, JPEG or SVG image using the HtmlExport module and the exportToImage method.
control: Pivot Table
platform: grid-sdk
documentation: ug
domainurl: ##DomainURL##
---

# Image Export in Vue Pivot Table

The Vue Pivot Table supports exporting the current visible pivot composition into image formats: **PNG**, **JPEG** and **SVG**. To enable image export, set the `allowImageExport` property to **true** and inject the `HtmlExport` module into the Pivot Table. Once enabled, call the `exportToImage` method programmatically, or use the image options in the built-in Toolbar export menu.

In the following example, an external button is used to start the image export. When the button is clicked, the `exportToImage` method is called with the **PNG** format and `ImageExportProperties` so that the Pivot Table is saved as an image.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/pivot-table/default-cs303/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/pivot-table/default-cs303/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/pivot-table/default-cs303" %}

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
