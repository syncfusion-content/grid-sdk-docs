---
layout: post
title: JavaScript TreeGrid Complex Data Binding | Syncfusion
description: Learn how to use complex data binding in JavaScript TreeGrid with nested field mapping, dot notation, and hierarchical data display.
platform: grid-sdk
control: Complex data binding
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Complex Data Binding in JavaScript TreeGrid

You can achieve complex data binding in the treegrid by using the dot(.) operator in the [`column.field`](../../api/treegrid/column#field).

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/treegrid/columns-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/columns-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/columns-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/columns-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/columns-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/columns-cs16" %}
{% endif %}