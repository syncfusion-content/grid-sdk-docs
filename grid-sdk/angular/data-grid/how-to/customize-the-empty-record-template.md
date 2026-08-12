---
layout: post
title: Angular Grid Empty Record Template | Syncfusion
description: Learn how to customize the empty record template in Angular Data Grid to display custom messages, images, or actions when no data is available.
platform: grid-sdk
control: Customize the Empty Record Template 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Empty Record Template in Angular Data Grid

The empty record template allows custom content such as images, text, or components to be displayed when the grid has no data, replacing the default "No records to display" message.

To enable this feature, set the [emptyRecordTemplate](https://ej2.syncfusion.com/angular/documentation/api/grid#emptyrecordtemplate) property of the grid. This property accepts an HTML element or a function that returns one.

The following example demonstrates rendering an image and text within the template to indicate that the grid has no data to display.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/empty-record-template-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/empty-record-template-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/grid/empty-record-template-cs1" %}
