---
layout: post
title: TypeScript TreeGrid Row Template | Syncfusion
description: Learn how to use row templates in TypeScript TreeGrid to customize row layouts, display custom content, and enhance data presentation.
platform: grid-sdk
control: Row template 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Template in TypeScript TreeGrid

The [`rowTemplate`](../../api/treegrid#rowtemplate) has an option to customise the look and behavior of the treegrid rows. The [`rowTemplate`](../../api/treegrid#rowtemplate) property accepts either the template string or HTML element ID.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/row-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/row-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/row-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/row-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/row-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/row-template-cs1" %}
{% endif %}

The [`rowTemplate`](../../api/treegrid#rowtemplate) property accepts only the TR element.

## Row template with formatting

If the [`rowTemplate`](../../api/treegrid#rowtemplate) is used, the value cannot be  formatted  inside the template using the [`columns.format`](../../api/treegrid/column#format) property. In that case, a function should be defined globally to format the value and invoke it inside the template.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/row-template-formatting-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/row-template-formatting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/row-template-formatting-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/row-template-formatting-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/row-template-formatting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/row-template-formatting-cs1" %}
{% endif %}

## Limitations

Row template feature is not compatible with all the features which are available in treegrid and it has limited features support. Here we have listed out the features which are not compatible with row template feature.

* Filtering
* Paging
* Sorting
* Scrolling
* Searching
* Rtl
* Context Menu
* State Persistence