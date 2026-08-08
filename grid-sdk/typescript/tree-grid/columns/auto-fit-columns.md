---
layout: post
title: TypeScript TreeGrid Auto Fit Columns | Syncfusion
description: Learn how to automatically adjust column widths in TypeScript TreeGrid to fit content and improve data presentation.
platform: grid-sdk
control: Auto fit columns 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Auto Fit Columns in TypeScript TreeGrid

The [`autoFitColumns`](../../api/treegrid/#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. You can autofit a specific column at initial rendering by invoking the [`autoFitColumns`](../../api/treegrid/#autofitcolumns) method in [`dataBound`](../../api/treegrid/#databound) event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columns-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/columns-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columns-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/columns-cs1" %}
{% endif %}

> You can autofit all the columns by invoking the [`autoFitColumns`](../../api/treegrid/column/#autofitcolumns) method without column names.