---
layout: post
title: ASP.NET MVC TreeGrid Validation | Syncfusion
description: Learn how to configure validation in ASP.NET MVC TreeGrid, including required fields, custom rules, and error handling during editing.
platform: grid-sdk
control: Validation
documentation: ug
---


# Validation in ASP.NET MVC TreeGrid

## Column validation

Column validation allows you to validate the edited or added row data and it display errors for invalid fields before saving data.
TreeGrid uses **Form Validator** component for column validation. You can set validation rules by defining the [`ValidationRules`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_ValidationRules) in [`Column`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) API.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/validation-rules/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ValidationRule.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/validation-rules/validationRule.cs %}
{% endhighlight %}
{% endtabs %}

## Custom validation

You can define your own custom validation rules for the specific columns by using **Form Validator custom rules**.

In the below demo, custom validation applied for **Priority** column.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/custom-validation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ValidationRule.cs" %}
{% include code-snippet/grid-sdk/asp-net-mvc/tree-grid/editing/custom-validation/validationRule.cs %}
{% endhighlight %}
{% endtabs %}

N> You can refer to our [`ASP.NET MVC Tree Grid`](https://www.syncfusion.com/aspnet-mvc-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`ASP.NET MVC Tree Grid example`](https://ej2.syncfusion.com/aspnetmvc/treegrid/overview#/fluent2) to knows how to present and manipulate data.