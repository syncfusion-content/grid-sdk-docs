---
layout: post
title: Customize empty value cells in Angular Pivotview component | Syncfusion
description: Learn here all about Customize empty value cells in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Customize empty value cells 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Customize empty value cells in Angular Pivotview component

You can show the custom string in the empty value cells using the `emptyCellsTextContent` string type property in `dataSourceSettings` object of the pivot table. It can be configured through code behind during initial rendering.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/getting-started-cs162/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/getting-started-cs162/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/pivot-table/getting-started-cs162" %}
