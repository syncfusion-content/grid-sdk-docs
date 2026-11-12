---
layout: post
title: JavaScript TreeGrid Display Foreign Key Values | Syncfusion
description: Learn how to display foreign key values in JavaScript TreeGrid by mapping related data sources and showing meaningful values instead of key identifiers.
platform: grid-sdk
control: Display foreign key values in treegrid
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Display Foreign Key Values in JavaScript TreeGrid

Since Tree Grid Data binding concept is of hierarchy relationship, we do not provide in-built support for foreignKey datasource.

To display the foreignKey value at initial rendering, we can use the [`queryCellInfo`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid#querycellinfo) event of the Tree Grid and also by using the [`editType`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#edittype) and [`columns.edit`](https://ej2.syncfusion.com/javascript/documentation/api/treegrid/column#edit) properties of Tree Grid Column, we can render DropDownList with external or foreign dataSource.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/treegrid/foreign-key-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/treegrid/foreign-key-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/treegrid/foreign-key-cs1" %}

> You can refer to our [`JavaScript Tree Grid`](https://www.syncfusion.com/javascript-ui-controls/js-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our JavaScript Tree Grid example [`JavaScript Tree Grid example`](https://ej2.syncfusion.com/demos/#material/tree-grid/treegrid-overview.html) to knows how to present and manipulate data.