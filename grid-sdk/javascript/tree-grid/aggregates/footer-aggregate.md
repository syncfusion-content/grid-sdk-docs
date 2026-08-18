---
layout: post
title: JavaScript TreeGrid Footer Aggregate | Syncfusion
description: Learn how to configure and display footer aggregate values in JavaScript TreeGrid, including API usage, templates, and formatting options.
platform: grid-sdk
control: Footer aggregate
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Footer Aggregate in JavaScript TreeGrid

Footer aggregate value is calculated for all the rows, and it is displayed in the footer cells. Use the [`footerTemplate`](../../api/treegrid/aggregateColumnModel#footertemplate) property to render the aggregate value in footer cells.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/aggregates-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/aggregates-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/aggregates-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/aggregates-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/aggregates-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/aggregates-cs3" %}
{% endif %}

> The aggregate values must be accessed inside the template using their corresponding [`type`](../../api/treegrid/aggregateColumnModel#type) name.

## How to format aggregate value

You can format the aggregate value result by using the [`format`](../../api/treegrid/aggregateColumnModel#type) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/aggregates-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/aggregates-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/aggregates-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/aggregates-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/aggregates-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/aggregates-cs4" %}
{% endif %}