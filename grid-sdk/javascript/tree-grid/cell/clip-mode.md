---
layout: post
title: JavaScript TreeGrid Clip Mode | Syncfusion
description: Learn how to configure clip mode in JavaScript TreeGrid to manage overflowing cell content using clipping, ellipsis, or ellipsis with tooltip display.
platform: grid-sdk
control: Clip mode 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Clip Mode in JavaScript TreeGrid

The clip mode provides options to display its overflow cell content and it can be defined by the [`columns.clipMode`](../../api/treegrid/column/#clipmode) property.

There are three types of [`clipMode`](../../api/treegrid/column/#clipmode). They are:

* **`Clip`**: Truncates the cell content when it overflows its area.
* **`Ellipsis`**: Displays ellipsis when the cell content overflows its area.
* **`EllipsisWithTooltip`**: Displays ellipsis when the cell content overflows its area, also it will display the tooltip while hover on ellipsis is applied.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/cell-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/cell-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/cell-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/cell-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/cell-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/cell-cs4" %}
{% endif %}

>By default, [`columns.clipMode`](../../api/treegrid/column/#clipmode) value is `Ellipsis`.