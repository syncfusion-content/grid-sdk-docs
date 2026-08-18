---
layout: post
title: Select TreeGrid rows based on certain condition in Angular TreeGrid component | Syncfusion
description: Learn how to select TreeGrid rows based on specific conditions using the selectRows method in the Syncfusion Angular TreeGrid component.
platform: grid-sdk
control: Select treegrid rows based on certain condition 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Select TreeGrid rows based on certain condition in Angular TreeGrid component

Rows can be selected in the TreeGrid based on specific conditions by using the [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#selectrows) method within the [`dataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#databound) event of the TreeGrid.

In the following example, only TreeGrid rows with a *Duration* column value greater than *4* are selected.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/treegrid/refresh-cs16/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/treegrid/refresh-cs16/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/treegrid/refresh-cs16" %}

> For comprehensive feature tours, visit the [`Angular TreeGrid feature tour page`](https://www.syncfusion.com/angular-components/angular-tree-grid). Additional practical examples are available in the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).