---
layout: post
title: JavaScript TreeGrid Column Template | Syncfusion
description: Learn how to use column templates in JavaScript TreeGrid to display custom content, images, buttons, and formatted data in cells.
platform: grid-sdk
control: Column template
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Column Template in JavaScript TreeGrid

The column [`template`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#template) has options to display custom element instead of a field value in the column.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/column-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/column-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/column-template-cs1" %}
> TreeGrid actions such as editing, filtering and sorting etc. will depend upon the column [`field`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#field). If the [`field`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#field) is not specified in the template column, the treegrid actions cannot be performed.

## Using condition template

You can render the template elements based on condition.

In the following code, checkbox is rendered based on `Approved` field value.

```
  <script id="template" type="text/x-template">
            <div class="template_checkbox">
                ${if(approved)}
                <input type="checkbox" checked> ${else}
                <input type="checkbox"> ${/if}
            </div>
        </script>
```


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/condition-inside-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/condition-inside-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/condition-inside-template-cs1" %}