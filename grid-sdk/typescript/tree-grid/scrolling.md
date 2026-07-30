---
layout: post
title: Scrolling in TypeScript Treegrid control | Syncfusion
description: Learn here all about Scrolling in Syncfusion TypeScript Treegrid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Scrolling 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Scrolling in TypeScript Treegrid control

The scrollbar will be displayed in the treegrid when content exceeds the element [`width`](../api/treegrid/#width) or [`height`](../api/treegrid/#height). The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of rows present in the treegrid exceeds its element height.
* The horizontal scrollbar appears when the sum of columns width exceeds the treegrid element width.
* The [`height`](../api/treegrid/#height) and [`width`](../api/treegrid/#width) are used to set the treegrid height and width, respectively.

> The default value for [`height`](../api/treegrid/#height) and [`width`](../api/treegrid/#width) is `auto`.

## Set width and height

To specify the [`width`](../api/treegrid/#width) and [`height`](../api/treegrid/#height) of the scroller in the pixel, set the pixel value to a number.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/scrolling-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/scrolling-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/scrolling-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/scrolling-cs1" %}
{% endif %}

## Responsive with parent container

Specify the [`width`](../api/treegrid/#width) and [`height`](../api/treegrid/#height) as `100%` to make the treegrid element fill its parent container.
Setting the [`height`](../api/treegrid/#height) to `100%` requires the treegrid parent element to have explicit height.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/responsive-scrolling-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/responsive-scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/responsive-scrolling-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/responsive-scrolling-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/responsive-scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/responsive-scrolling-cs1" %}
{% endif %}

## Sticky header

The Syncfusion TypeScript TreeGrid provides a useful feature to keep the column headers fixed (sticky) while scrolling through large datasets. This ensures that the headers remain visible at all times, enhancing user experience by making it easier to understand the context of the data displayed, especially when dealing with wide or long hierarchical data.

For example, in a project management application, users often need to scroll through a detailed list of tasks and subtasks. When the dataset is large, scrolling down can cause confusion if the column headers scroll out of view, making it difficult to remember what each column represents. By enabling sticky headers, the column headers remain visible even while scrolling, allowing users to easily keep track of the data context.

To enable sticky headers in the TreeGrid, you can simply set the `enableStickyHeader` property to **true**. This makes the column headers stick to the top of the TreeGrid container or its parent scrolling container when you scroll vertically.

The following sample demonstrates how to enable or disable the sticky header in the TreeGrid using a [Switch](../../switch/getting-started) and its [change](../api/switch#change) event:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/scrolling-sticky-header/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/scrolling-sticky-header/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/scrolling-sticky-header" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/scrolling-sticky-header/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/scrolling-sticky-header/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/sscrolling-sticky-header" %}
{% endif %}

## Scroll to selected row

You can scroll the treegrid content to the selected row position by using the [`rowSelected`](../api/treegrid/#rowselected) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/scroll-to-select-row-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/scroll-to-select-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/scroll-to-select-row-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/scroll-to-select-row-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/scroll-to-select-row-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/scroll-to-select-row-cs1" %}
{% endif %}
