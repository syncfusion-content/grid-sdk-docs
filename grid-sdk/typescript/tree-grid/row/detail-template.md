---
layout: post
title: TypeScript TreeGrid Detail Template | Syncfusion
description: Learn how to use detail templates in TypeScript TreeGrid to display expandable row content, nested data, and custom detail views.
platform: grid-sdk
control: Detail template 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Detail Template in TypeScript TreeGrid

The detail template provides additional information about a particular row. By expanding the parent row the child rows are expanded along with their detail template. The [`detailTemplate`](../../api/treegrid#detailtemplate) property accepts either the template string or HTML element ID.

To use detail template, inject the DetailRow module in the TreeGrid.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/detail-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/detail-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/detail-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/detail-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/detail-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/detail-template-cs1" %}
{% endif %}