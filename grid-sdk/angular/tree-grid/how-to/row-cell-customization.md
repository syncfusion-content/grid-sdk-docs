---
layout: post
title: Row cell customization in Angular TreeGrid component | Syncfusion
description: Learn how to customize rows and cells in the Syncfusion Angular TreeGrid component using queryCellInfo and rowDataBound events.
platform: grid-sdk
control: Row cell customization 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row cell customization in Angular TreeGrid component

Rows and cells in the TreeGrid can be customized using the [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) and [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) events.

In the demonstration below, command buttons are customized and shown only for parent rows, as configured in the [`queryCellInfo`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#querycellinfo) and [`rowDataBound`](https://ej2.syncfusion.com/angular/documentation/api/treegrid/#rowdatabound) events.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/treegrid/refresh-cs15/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/treegrid/refresh-cs15/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/treegrid/refresh-cs15" %}

> For comprehensive feature overviews, visit the [`Angular TreeGrid feature tour page`](https://www.syncfusion.com/angular-components/angular-tree-grid). Additional practical examples are available in the [`Angular TreeGrid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview).