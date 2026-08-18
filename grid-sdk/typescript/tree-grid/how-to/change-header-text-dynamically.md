---
layout: post
title: TypeScript TreeGrid Change Header Text Dynamically | Syncfusion
description: Learn how to dynamically change header text in TypeScript TreeGrid to customize column headers and improve user experience.
platform: grid-sdk
control: Change header text dynamically
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Change Header Text Dynamically in TypeScript TreeGrid

You can change the column [`headerText`](../../api/treegrid/column#headertext) dynamically through an external button.

Follow the given steps to change the header text dynamically:

**Step 1**:

Get the column object corresponding to the field name by using the [`getColumnByField`](../../api/treegrid#getcolumnbyfield) method. Then, change the header text value.

```ts
let column = treegrid.getColumnByField("taskName"); // Get column object.
column.headerText = 'Changed Text';

```

**Step 2**:

To reflect the changes in the treegrid header, invoke the [`refreshColumns`](../../api/treegrid#refreshcolumns) method.

```ts

treegrid.refreshColumns();

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/headertext-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/headertext-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/headertext-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/treegrid/headertext-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/headertext-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/headertext-cs1" %}
{% endif %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#/material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.