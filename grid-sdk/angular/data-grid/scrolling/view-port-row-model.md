---
layout: post
title: Angular Data Grid Viewport Row Model | Syncfusion
description: Learn how the Viewport Row Model in the Angular Data Grid renders only visible rows with DOM virtualization, server-side operations, and buffer settings.
platform: grid-sdk
control: Viewport Row Model
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Viewport Row Model in Angular Data Grid

The Syncfusion<sup style="font-size:70%">&reg;</sup> Angular Data Grid supports rendering data based on the active viewport. Instead of rendering all available records, the Data Grid renders only the rows visible within the viewport, reducing DOM overhead and improving rendering performance. By default, the Data Grid uses [DOM virtualization](https://ej2.syncfusion.com/angular/documentation/grid/scrolling/dom-virtualization) to maintain only the visible rows in the DOM.

The Data Grid extends this viewport-driven rendering mechanism to remote data sources. Records are retrieved from the server on demand, and the server returns the requested result set. The Data Grid then uses DOM virtualization to render only the rows visible within the active viewport, regardless of the number of records returned. This ensures that data retrieval and row rendering are scoped to the active viewport, minimizing DOM footprint.

As scrolling updates the viewport, the Data Grid retrieves the required row range and refreshes the rendered content accordingly. DOM virtualization ensures that only rows within the active viewport are maintained in the DOM.

[Paging](https://ej2.syncfusion.com/angular/documentation/grid/paging), [infinite scrolling](https://ej2.syncfusion.com/angular/documentation/grid/scrolling/infinite-scrolling), and [virtual scrolling](https://ej2.syncfusion.com/angular/documentation/grid/scrolling/virtual-scrolling) are built on this viewport-driven rendering mechanism. By rendering only the rows required for the active viewport, the Data Grid reduces rendering overhead, minimizes client-side memory consumption, and maintains consistent performance regardless of dataset size.

![Angular Data Grid viewport row model overview](../images/angular-data-grid-viewport-row-model-overview.png)

In the following sample, the Data Grid renders only the rows currently visible within the viewport in the DOM.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/view-port-row-model-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/view-port-row-model-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/view-port-row-model-cs1" %}

## Viewport buffer settings

The viewport buffer determines the number of additional rows rendered outside the visible viewport. Buffered elements help maintain a smooth scrolling experience by keeping adjacent content available for rendering.

The number of buffered rows is configured through the [rowBuffer](https://ej2.syncfusion.com/angular/documentation/api/grid/domvirtualizationsettingsmodel#rowbuffer) property of [domVirtualizationSettings](https://ej2.syncfusion.com/angular/documentation/api/grid#domvirtualizationsettings). By default, the Data Grid renders `5` additional rows beyond the visible viewport.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/view-port-row-model-cs2/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/view-port-row-model-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/view-port-row-model-cs2" %}

## Server-side data operations

The Data Grid supports server-side execution of data operations such as sorting, filtering, searching, and paging. The Data Grid sends the requested operation details as part of the query, and the server processes the operation against the complete dataset and returns the requested records to the Data Grid.

After the data is received, the Data Grid uses DOM virtualization to render only the rows visible within the viewport.

In the following sample, a local in-memory data source simulates the server. Custom binding is used through the [dataStateChange](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#datastatechange) event: each viewport request is processed by custom logic that applies the filter, sort, and paging details to the local data and supplies only the requested records to the Data Grid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/grid/view-port-row-model-cs3/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/grid-sdk/angular/grid/view-port-row-model-cs3/src/datasource.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/grid/view-port-row-model-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/data-grid/view-port-row-model-cs3" %}

## See also

* [Remote data](https://ej2.syncfusion.com/angular/documentation/grid/data-binding/remote-data)
* [Enable editing](https://ej2.syncfusion.com/angular/documentation/grid/editing/edit)
* [Custom binding](https://ej2.syncfusion.com/angular/documentation/grid/data-binding/custom-binding)
