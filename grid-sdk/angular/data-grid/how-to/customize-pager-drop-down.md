---
layout: post
title: Customize pager drop down in Angular Grid component | Syncfusion
description: Learn how to customize the pager dropdown values in the Syncfusion Angular Grid for flexible page size selection using pageSettings.
platform: grid-sdk
control: Customize pager drop down 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Customize pager drop down in Angular Grid component

You can customize the default values available in the pager dropdown of the Syncfusion Angular Grid by defining the [`pageSizes`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettingsModel/#pagesizes) property as an array of strings or numbers within the Grid's `pageSettings` configuration. This property determines the selectable page size options in the pager dropdown, allowing you to tailor the Grid’s pagination experience to your application's needs.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/custom-column-cs4/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/custom-column-cs4/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/grid/custom-column-cs4" %}
