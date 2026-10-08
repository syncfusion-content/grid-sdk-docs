---
layout: post
title: ASP.NET Core TreeGrid Validation | Syncfusion
description: Learn how to configure validation in ASP.NET Core TreeGrid, including required fields, custom rules, and error handling during editing.
platform: grid-sdk
control: Validation
documentation: ug
---


# Validation in ASP.NET Core TreeGrid

## Column validation

Column validation allows you to validate the edited or added row data and it display errors for invalid fields before saving data. TreeGrid uses **Form Validator** component for column validation. You can set validation rules by defining the [`validationRules`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html#Syncfusion_EJ2_TreeGrid_TreeGridColumn_ValidationRules) in [`e-treegrid-column`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.TreeGrid.TreeGridColumn.html) tag helper.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/validation-rules/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ValidationRule.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/validation-rules/validationRule.cs %}
{% endhighlight %}
{% endtabs %}


## Custom validation

You can define your own custom validation rules for the specific columns by using **Form Validator custom rules**.

In the below demo, custom validation applied for **Priority** column.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/custom-validation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ValidationRule.cs" %}
{% include code-snippet/grid-sdk/asp-net-core/tree-grid/editing/custom-validation/validationRule.cs %}
{% endhighlight %}
{% endtabs %}


N> You can refer to our  [`ASP.NET Core Tree Grid`](https://www.syncfusion.com/aspnet-core-ui-controls/tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our ASP.NET Core Tree Grid example [`ASP.NET Core Tree Grid example`](https://ej2.syncfusion.com/aspnetcore/treegrid/overview#/fluent2) to knows how to present and manipulate data.