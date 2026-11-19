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

The detail template provides additional information about a particular row. By expanding the parent row the child rows are expanded along with their detail template. The [`detailTemplate`](https://ej2.syncfusion.com/documentation/api/treegrid#detailtemplate) property accepts either the template string or HTML element ID.

To use detail template, inject the DetailRow module in the TreeGrid.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/detail-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/detail-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/detail-template-cs1" %}
