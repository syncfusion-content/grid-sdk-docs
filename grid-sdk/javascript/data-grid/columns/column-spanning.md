---
layout: post
title: Column spanning in JavaScript Grid control | Syncfusion
description: Learn here all about Column spanning in Syncfusion JavaScript Grid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Column spanning 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Column spanning in JavaScript Grid control

The column spanning feature in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid allows you to merge adjacent cells horizontally, creating a visually appealing and informative layout. By defining the [colSpan](../../api/grid/queryCellInfoEventArgs/#colspan) attribute in the [queryCellInfo](../../api/grid/queryCellInfoEventArgs/) event, you can easily span cells and customize the appearance of the grid.

In the following demo, Employee **Davolio** doing analysis from 9.00 AM to 10.00 AM, so that cells have spanned.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/column-spanning-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/column-spanning-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/column-spanning-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/column-spanning-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/column-spanning-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/column-spanning-cs1" %}
{% endif %}

## Change the border color while column spanning

You can change the border color for the spanned cells by the using [queryCellInfo](../../api/grid/#querycellinfo) event. This event triggers before the cell element is appended to the Grid element.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/column-spanning-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/column-spanning-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/column-spanning-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/column-spanning-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/column-spanning-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/column-spanning-cs3" %}
{% endif %}

## Limitations

* The [updateCell](../../api/grid/#updatecell) method does not support column spanning.
* Column spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling
    3. Grouping
    4. Autofill

## Column spanning using enableColumnSpan property    

The Syncfusion Grid introduces a simplified approach to horizontally merge cells using the `enableColumnSpan` property. 

When the `enableColumnSpan` property is enabled, the Grid automatically merges cells with matching data across adjacent columns without requiring manual span configuration using the [queryCellInfo](../../api/grid/#querycellinfo) event. These merged cells are visually combined into a single cell, improving readability.

Here is an example of how to use the `enableColumnSpan` property to merge cells horizontally:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/grid/column-spanning-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/column-spanning-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/column-spanning-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/grid/column-spanning-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/grid/column-spanning-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/grid/column-spanning-cs4" %}
{% endif %}

> You can also control spanning at the column level. To prevent merging for specific columns, set `enableColumnSpan` to **false** in the column definition.

### Limitation

* Virtualization
* Infinite Scrolling
* Lazy Load Grouping
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export
* Foreign Key
* Hierarchy Grid