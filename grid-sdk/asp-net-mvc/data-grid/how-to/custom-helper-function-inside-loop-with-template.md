---
layout: post
title: Use custom helper inside the loop with templates Syncfusion ASP.NET MVC Grid Component 
description: Use custom helper inside the loop with templates in Syncfusion ASP.NET MVC Grid component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Use custom helper inside the loop with templates 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Use custom helper inside the loop with templates in ASP.NET MVC Grid

The Syncfusion ASP.NET MVC Grid allows you to use custom helpers inside the loop with `Template` property of a column. This feature enables you to create complex templates that can incorporate additional helper functions.

The **Customer Rating** column includes a custom template defined using `Template`. Inside this template, iterates through the **item** array and generates <span> tag, displayed as stars using the CSS below:

```css
.e-grid .rating .star:before {
    content: '★';
}

.e-grid .rating .star {
    font-size: 132%;
    color: lightgrey;
}
```

The class is dynamically assigned based on the rating value, highlighting the stars using the CSS below:

```css
.e-grid .rating .star.checked {
    color: #ffa600;
}
```

This is demonstrated in the following example:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/how-to/custom-helper/razor %}
{% endhighlight %}
{% highlight c# tabtitle="custom-helper.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/grid/how-to/custom-helper/custom-helper.cs %}
{% endhighlight %}
{% endtabs %}

![custom helper](../images/customer-loop.png)