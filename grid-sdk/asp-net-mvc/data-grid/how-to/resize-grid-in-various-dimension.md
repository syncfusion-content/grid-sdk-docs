---
layout: post
title: ASP.NET MVC Grid Dynamic Resizing | Syncfusion
description: Learn how to resize ASP.NET MVC Data Grid dynamically by adjusting parent container dimensions and managing grid width and height responsively.
platform: grid-sdk
control: Resize the Grid in various dimension
publishingplatform: grid-sdk
documentation: ug
---

# Grid Resizing in ASP.NET MVC Data Grid

The Syncfusion ASP.NET MVC Grid offers a friendly way to resize the Grid, allowing you to adjust its width and height for improved data visualization.

To resize the Grid externally, you can use an external button to modify the width of the parent element that contains the Grid. This will effectively resize the Grid along with its parent container.

The following example demonstrates how to resize the Grid on external button click based on input:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/how-to/keyboard-dimension/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Dimension.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/how-to/keyboard-dimension/dimension.cs %}
{% endhighlight %}
{% endtabs %}

![various dimension](../images/how-to-dimension.png)