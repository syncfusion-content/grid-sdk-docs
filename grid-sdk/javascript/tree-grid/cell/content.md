---
layout: post
title: JavaScript TreeGrid Cell Content | Syncfusion
description: Learn how to display HTML content in JavaScript TreeGrid headers and cells using disableHtmlEncode to render formatted content and custom markup.
platform: grid-sdk
control: Content
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# HTML Content in JavaScript TreeGrid

The HTML tags can be displayed in the TreeGrid header and content by enabling the [`disableHtmlEncode`](../../api/treegrid/column#disablehtmlencode) property.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/cell-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/cell-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/cell-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/cell-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/cell-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/cell-cs5" %}
{% endif %}