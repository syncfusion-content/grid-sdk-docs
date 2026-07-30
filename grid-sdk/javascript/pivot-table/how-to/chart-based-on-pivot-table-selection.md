---
layout: post
title: Chart based on pivot table selection in Javascript | Syncfusion
description: Learn here all about Chart based on pivot table selection in Syncfusion JavaScript Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Chart based on pivot table selection 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Chart based on pivot table selection in JavaScript Pivotview component

The Typescript Pivot Table component supports creating charts based on cell selections within the pivot table. This customization allows charts to be plotted dynamically using data from selected cells, providing visual representation of specific data segments.

## Configuration

Cell selection is enabled using the [`allowSelection`](https://ej2.syncfusion.com/documentation/api/pivotview/gridSettings#allowselection) property. The selection behavior is configured through the [`selectionSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/pivotSelectionSettings) property to define selection type and mode.

## Implementation

The [`cellSelected`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#cellselected) event triggers when cells are selected in the pivot table. This event provides selected cell information including row header name, column header name, measure name, and values. Using this data, the [`chart`](https://ej2.syncfusion.com/documentation/chart/getting-started) control can be plotted accordingly.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/chart-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/chart-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/chart-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/chart-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/chart-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/chart-cs1" %}
{% endif %}