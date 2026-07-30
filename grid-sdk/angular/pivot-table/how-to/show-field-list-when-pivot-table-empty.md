---
layout: post
title: Show field list when Angular Pivot Table is empty | Syncfusion
description: Learn here all about Show field list when pivot table empty in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Show field list when pivot table empty 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Show field list for empty Angular Pivot Table component

When there are no fields configured in a pivot table's row, column, value, and filter axes, the field list can be automatically displayed to help users configure the pivot table. This is particularly useful in scenarios where users start with an empty pivot configuration and need immediate access to available fields for setup. To achieve this functionality, use the [`dataBound`](https://ej2.syncfusion.com/documentation/api/pivotview/#databound) event and call the `onShowFieldList` method as demonstrated below.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/getting-started-cs170/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/getting-started-cs170/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/pivot-table/getting-started-cs170" %}