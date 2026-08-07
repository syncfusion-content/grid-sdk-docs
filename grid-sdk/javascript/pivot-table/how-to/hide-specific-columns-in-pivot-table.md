---
layout: post
title: Hide specific columns in pivot table in Javascript | Syncfusion
description: Learn here all about Hide specific columns in pivot table in Syncfusion ##Platform_Name## Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Hide specific columns in pivot table 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Hide specific columns in the ##Platform_Name## Pivot Table component

By using the [`columnRender`](https://ej2.syncfusion.com/documentation/api/pivotview/gridSettings#columnrender) event in the [`gridSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/gridSettings), you can hide specific column(s) in the pivot table. In the example below, the **"Units Sold"** column under **"FY 2016"** is hidden by setting its **visible** property to **false** via the [`columnRender`](https://ej2.syncfusion.com/documentation/api/pivotview/gridSettings#columnrender) event.

N> The **dot(.)** character in **FY 2016.Units Sold** is used by default to identify the header levels in the pivot table's row and column. It can be changed by setting the [`headerDelimiter`](https://ej2.syncfusion.com/documentation/api/pivotview/valueSortSettingsModel#headerdelimiter) in the [`valueSortSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#valuesortsettings) property to any other delimiter instead of the default separator.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs494/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs494/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs494" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs494/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs494/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs494" %}
{% endif %}
