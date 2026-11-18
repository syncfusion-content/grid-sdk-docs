---
layout: post
title: TypeScript TreeGrid Footer Aggregate | Syncfusion
description: Learn how to configure and display footer aggregate values in TypeScript TreeGrid, including API usage, templates, and formatting options.
platform: grid-sdk
control: Footer aggregate
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Footer Aggregate in TypeScript TreeGrid

Footer aggregate value is calculated for all the rows, and it is displayed in the footer cells. Use the [`footerTemplate`](https://ej2.syncfusion.com/documentation/api/treegrid/aggregateColumnModel#footertemplate) property to render the aggregate value in footer cells.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/aggregates-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/aggregates-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/aggregates-cs3" %}


> The aggregate values must be accessed inside the template using their corresponding [`type`](https://ej2.syncfusion.com/documentation/api/treegrid/aggregateColumnModel#type) name.

## How to format aggregate value

You can format the aggregate value result by using the [`format`](https://ej2.syncfusion.com/documentation/api/treegrid/aggregateColumnModel#type) property.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/aggregates-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/aggregates-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/aggregates-cs4" %}
