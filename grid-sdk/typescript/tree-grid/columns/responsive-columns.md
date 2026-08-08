---
layout: post
title: TypeScript TreeGrid Responsive Columns | Syncfusion
description: Learn how to create responsive columns in TypeScript TreeGrid using media queries to control column visibility and optimize layouts across devices.
platform: grid-sdk
control: Responsive columns 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Responsive Columns in TypeScript TreeGrid

You can toggle column visibility based on media queries which are defined
at the [`hideAtMedia`](../../api/treegrid/column/#hideatmedia).
The [`hideAtMedia`](../../api/treegrid/column/#hideatmedia) accepts valid
[Media Queries]( http://cssmediaqueries.com/what-are-css-media-queries.html ).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columns-cs18/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columns-cs18/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/columns-cs18" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columns-cs18/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columns-cs18/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/columns-cs18" %}
{% endif %}