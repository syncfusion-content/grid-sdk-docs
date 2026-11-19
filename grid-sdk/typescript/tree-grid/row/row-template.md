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

The [`rowTemplate`](https://ej2.syncfusion.com/documentation/api/treegrid#rowtemplate) has an option to customize the look and behavior of the treegrid rows. The [`rowTemplate`](https://ej2.syncfusion.com/documentation/api/treegrid#rowtemplate) property accepts either the template string or HTML element ID.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/row-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/row-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/row-template-cs1" %}


The [`rowTemplate`](https://ej2.syncfusion.com/documentation/api/treegrid#rowtemplate) property accepts only the TR element.

## Row template with formatting

If the [`rowTemplate`](https://ej2.syncfusion.com/documentation/api/treegrid#rowtemplate) is used, the value cannot be  formatted  inside the template using the [`columns.format`](https://ej2.syncfusion.com/documentation/api/treegrid/column#format) property. In that case, a function should be defined globally to format the value and invoke it inside the template.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/row-template-formatting-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/row-template-formatting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/row-template-formatting-cs1" %}


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