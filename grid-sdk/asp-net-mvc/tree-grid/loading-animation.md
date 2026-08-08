---
layout: post
title: ASP.NET MVC TreeGrid Loading Animation | Syncfusion
description: Learn how to use loading animations in ASP.NET MVC TreeGrid, including spinner and shimmer indicators for improved loading experiences.
platform: grid-sdk
control: Loading Animation
publishingplatform: grid-sdk
documentation: ug
---

# Loading Animation in ASP.NET MVC TreeGrid

The Tree Grid displays a loading indicator while the data is being fetched and bound to the tree grid during initial rendering, refreshing, and after performing any tree grid actions like sorting, filtering, and more.

The tree grid supports two indicator types, which can be enabled by setting the `loadingIndicator.indicatorType` property to Spinner or Shimmer. The default value of the indicator type is Spinner.

In the following sample, the Shimmer indicator is displayed while the tree grid is loading and refreshing when using the remote data.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight c# tabtitle="LoadingAnimation.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/data-binding-mvc/loading-animation/loadingAnimation.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/data-binding-mvc/loading-animation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="LoadingAnimation.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/data-binding-mvc/loading-animation/loadingAnimation.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/TreeGrid/Overview#/material) to knows how to present and manipulate data.
