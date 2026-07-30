---
layout: post
title: Chart integration in JavaScript Pivotview control | Syncfusion
description: Learn here all about Chart integration in Syncfusion JavaScript Pivotview control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Chart integration 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Chart integration in JavaScript Pivotview control

You can enable the pivot chart and visualize it against pivot data as a graphical format in pivot table itself. The pivot chart control can be displayed individually for pivot values, and you can change the report dynamically using the field list and grouping bar. More than 15 types of pivot charts are available. This document explains available features and settings of the pivot chart control.

To display the pivot chart control, set the [`displayOption.view`](../api/pivotview/displayOption/#view) property to pivot chart.

>You should inject the `PivotChart` module to make the pivot chart features available in the pivot table.

The following sample displays the pivot chart control based on the pivot report bound on it.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs6" %}
{% endif %}

## Data binding

You can bind both the local and remote data binding options in the control to feed data. The [`dataSource`](../api/pivotview/dataSource/#data) property can be assigned either with the instance of `DataManager` or JavaScript object array collection. For more information, refer to the topic [Data Binding](./data-binding).

## Pivot Chart settings

You can customize the pivot chart visualization by using the [`chartSettings`](../api/pivotview/chartSettings) property.

By default, the pivot chart can be drawn with the pivot data populated by the first value from value axis. But, you can draw the pivot chart by the desired value field by setting the [`value`](../api/pivotview/chartSettings/#value) property to value field name in the data source.

### Multiple axis

You can draw the pivot chart with multiple value fields available in the data source by setting the [`enableMultiAxis`](../api/pivotview/chartSettings/#enablemultiaxis) property to true.

In the following sample, the pivot chart will be drawn with both the **Sold** and **Amount** value fields available in the data source.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs7" %}
{% endif %}

### Series customization

You can customize the series of pivot chart using the [`chartSeries`](../api/pivotview/chartSettings/#chartseries) property. The changes in the property can be reflected commonly in all the pivot chart series.

In the following sample, the pivot chart type and border has been changed for all the series.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs8" %}
{% endif %}

You can also customize the pivot chart series individually using the [`chartSeriesCreated`](../api/pivotview/pivotViewModel/#chartseriescreated) event, which occurs after the pivot chart series has been created. You can customize each series individually by iterating them.

In the following sample, the even series are hidden in the pivot chart.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs9" %}
{% endif %}

### Axis customization

You can customize the axis of the pivot chart by using the [`primaryXAxis`](../api/pivotview/chartSettings/#primaryxaxis) and [`primaryYAxis`](../api/pivotview/chartSettings/#primaryyaxis) properties.

In the following sample, title of y-axis and x-axis are customized.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs10" %}
{% endif %}

## Pivot Chart types

It supports 19 different types of pivot charts as follows:

* Line
* Column
* Area
* Bar
* StepArea
* StackingColumn
* StackingArea
* StackingBar
* StepLine
* Pareto
* Bubble
* Scatter
* Spline
* SplineArea
* StackingColumn100
* StackingBar100
* StackingArea100
* Polar
* Radar

**Line** is the default pivot chart type. You can change the pivot chart type by using the [`type`](../api/pivotview/pivotSeriesModel/#type) property.

In the following sample, the pivot chart type is set to bar.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs11" %}
{% endif %}

## Legend customization

You can customize the legend by using the [`legendSettings`](../api/pivotview/chartSettings/#legendsettings) property. By default, the legend can be visible. You can hide it by using the `legendSettings.visible` property.

It supports different types of legend shapes as follows:

* Circle
* Rectangle
* VerticalLine
* Pentagon
* InvertedTriangle
* SeriesType
* Triangle
* Diamond
* Cross
* HorizontalLine

The default legend is SeriesType. It draws the shape based on pivot chart type. You can change the legend shape by using the [`chartSeries.legendShape`](../api/pivotview/pivotSeriesModel/#legendshape) property.

You can set the position of legend in the pivot chart using the `legendSettings.position` property.

The following are the available options to set the legend position:

* Auto: Places the legend based on area type. This is the default.
* Top: Displays the legend at the top of the pivot chart.
* Left: Displays the legend at the left of the pivot chart.
* Bottom: Displays the legend at the bottom of the pivot chart.
* Right: Displays the legend at the right of the pivot chart.
* Custom: Displays the legend based on the given x and y values.

In the following sample, the legend shape and its position can be customized.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs12" %}
{% endif %}

## User interaction

### Marker and crosshair

You can enable and customize the marker and crosshair using the [`marker`](../api/pivotview/pivotSeriesModel/#marker) and [`crosshair`](../api/pivotview/chartSettings/#crosshair) properties, respectively.

You can enable and customize the crosshair tooltip for axes using the [`crosshairTooltip`](../api/pivotview/pivotAxisModel/#crosshairtooltip) property.

In the following sample, the marker and crosshair can be enabled and customized.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs13" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs13/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs13" %}
{% endif %}

### Zooming and panning

You can customize the zooming and panning options using the [`zoomSettings`](../api/pivotview/chartSettings/#zoomsettings) property.

It supports four types of zooming, which can be set as follows:

* [`enablePinchZooming`](../api/pivotview/pivotZoomSettingsModel/#enablepinchzooming)
* [`enableSelectionZooming`](../api/pivotview/pivotZoomSettingsModel/#enableselectionzooming)
* [`enableDeferredZooming`](../api/pivotview/pivotZoomSettingsModel/#enabledeferredzooming)
* [`enableMouseWheelZooming`](../api/pivotview/pivotZoomSettingsModel/#enablemousewheelzooming)

The following are the three types of modes for zooming the pivot chart:

* x: Pivot Chart can be zoomed horizontally.
* y: Pivot Chart can be zoomed  vertically.
* x,y: Pivot Chart can be zoomed in both vertically and horizontally.

The zooming mode can be set using the [`mode`](../api/pivotview/pivotZoomSettingsModel/#mode) property.

By default, if the pivot chart is zoomed, a toolbar displays options such as Zoom, ZoomIn, ZoomOut, Pan, and Reset. You can set the desired option by using the `toolbarItems` property.

In the following sample, all the four types of zooming are enabled with toolbar options.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs14/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs14" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs14/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs14" %}
{% endif %}

### Tooltip

By default, the tooltip is enabled. You can customize it by using the [`tooltip`](../api/pivotview/chartSettings/#tooltip) property.

In the following sample, the default appearance of tooltip can be modified.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs15" %}
{% endif %}

## Grouping bar

You can enable the grouping bar by setting the `showGroupingBar` property to true. In the grouping bar of pivot chart integration, the drop-down list is placed in value axis instead of buttons. The drop-down list holds the list of value fields bound in data source and it can be switched to draw the pivot chart with the selected value field.

> For the multiple axis support, the buttons will be placed in value axis instead of drop-down list.

For more information, refer to the topic [Grouping Bar](./grouping-bar).

In the following sample, the grouping bar is enabled in the pivot chart integration.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs16/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs16" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs16/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs16" %}
{% endif %}

## Field list

You can enable both `Fixed` and `Popup` modes of field list options in the pivot chart integration. So, you can customize the report dynamically and view the result in pivot chart.
For more information, refer to the topic [Field List](./field-list).

In the following sample, the `Popup` mode of field list is enabled in the pivot chart integration.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs17/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs17" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs17/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs17" %}
{% endif %}

## Export and print

The pivot chart can be exported using the `chartExport` method which holds the parameters export type, file name, PDF orientation, width, and height.

The following are the four types of exporting options:

* PNG
* JPEG
* SVG
* PDF

You can print the pivot chart using the `printChart` method.

In the following sample, exporting and printing can be triggered by the **Export** and **Print** external buttons, respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/chart-export-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/chart-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/chart-export-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/chart-export-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/chart-export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/chart-export-cs1" %}
{% endif %}