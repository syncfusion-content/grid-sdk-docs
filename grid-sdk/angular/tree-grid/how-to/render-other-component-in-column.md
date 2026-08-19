---
layout: post
title: Render other component in a column in Angular TreeGrid component | Syncfusion
description: Learn how to render custom components in columns using the template property of the Syncfusion Angular TreeGrid component.
platform: grid-sdk
control: Render other component in column 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Render other component in a column in Angular TreeGrid component

Custom components can be rendered in a TreeGrid column using the template property.

Initialize the column template for the desired custom component. The template property will render the specified component inside the column.

In the sample below, a DropDownList is rendered in the **Priority** column.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/treegrid/refresh-cs13/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/treegrid/refresh-cs13/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/treegrid/refresh-cs13" %}

> For more feature information, see the [`Angular TreeGrid feature tour page`](https://www.syncfusion.com/angular-components/angular-tree-grid). Practical examples for rendering and manipulating data can be found in the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).