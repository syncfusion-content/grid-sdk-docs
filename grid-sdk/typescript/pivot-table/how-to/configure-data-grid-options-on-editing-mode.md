---
layout: post
title: Configure data grid options on editing mode in Javascript | Syncfusion
description: Learn here all about Configure data grid options on editing mode in Syncfusion ##Platform_Name## Pivotview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Configure data grid options on editing mode 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Configure data grid editing mode in the JavaScript Pivot Table

The Typescript Pivot Table component provides the ability to configure various data grid options when working with drill-through functionality in editing mode. When users double-click on value cells (cells containing aggregated data), the component displays the underlying raw data in a drill-through grid popup. The [`beginDrillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#begindrillthrough) event allows users to access and configure grid features such as sorting, grouping, and filtering before displaying the drill-through grid popup.

## Implementation

The [`beginDrillThrough`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#begindrillthrough) event occurs when users double-click on any value cell in the pivot table. This event provides access to the grid instance and its configuration options before displaying the drill-through popup, enabling users to customize the grid behavior according to their requirements.

> Grid features are segregated into individual feature-wise modules. For example, to use the sorting feature, the `Sort` module must be injected using the `Grid.Inject(Sort)` method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs73/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs73/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs73" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs73/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs73/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs73" %}
{% endif %}
