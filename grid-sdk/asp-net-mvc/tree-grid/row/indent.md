---
layout: post
title: ASP.NET MVC TreeGrid Indent and Outdent | Syncfusion
description: Learn how to indent and outdent rows in ASP.NET MVC TreeGrid to modify hierarchical relationships and manage parent-child records.
platform: grid-sdk
control: Indent and Outdent
documentation: ug
---

# Indent and Outdent in ASP.NET MVC TreeGrid

The Indent and Outdent feature will help to change the hierarchy level of rows in tree grid. The indent action moves the selected row as the last child of its previous row, whereas the outdent action moves the selected row as a sibling to its parent row.

To use the indent and outdent feature, inject the `RowDD` module in the Tree Grid. The tree grid toolbar has the built-in items to execute indent and outdent actions. Define this by using the toolbar property.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/indent/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Indent.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/indent/indent.cs %}
{% endhighlight %}
{% endtabs %}

## Indent/Outdent a row programmatically

You can change the hierarchy level of record programmatically using `indent` and `outdent` methods.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/programmatic-indent/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Indent.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/programmatic-indent/indent.cs %}
{% endhighlight %}
{% endtabs %}

N>Refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to learn how to present and manipulate data.