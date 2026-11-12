---
layout: post
title: TypeScript TreeGrid Auto Fit Columns | Syncfusion
description: Learn how to automatically adjust column widths in TypeScript TreeGrid to fit content and improve data presentation.
platform: grid-sdk
control: Auto fit columns
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Auto Fit Columns in TypeScript TreeGrid

The [`autoFitColumns`](https://ej2.syncfusion.com/documentation/api/treegrid#autofitcolumns) method resizes the column to fit the widest cell's content without wrapping. You can autofit a specific column at initial rendering by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/documentation/api/treegrid#autofitcolumns) method in [`dataBound`](https://ej2.syncfusion.com/documentation/api/treegrid#databound) event.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columns-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/columns-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/columns-cs1" %}


> You can autofit all the columns by invoking the [`autoFitColumns`](https://ej2.syncfusion.com/documentation/api/treegrid/column#autofitcolumns) method without column names.