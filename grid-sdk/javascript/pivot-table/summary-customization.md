---
layout: post
title: Summary customization in JavaScript Pivot Table component | Syncfusion
description: Learn here all about Summary customization in Syncfusion JavaScript Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Summary customization 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Summary customization in JavaScript Pivot Table component

## Show or hide grand totals

Allows to show or hide grand totals in rows and columns using the [`showGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showgrandtotals) property. To hide the grand totals in rows and columns, set the property [`showGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showgrandtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#datasourcesettings) to **false**. End user can also hide grand totals for row or columns separately by setting the property [`showRowGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showrowgrandtotals) or [`showColumnGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showcolumngrandtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#datasourcesettings) to **false** respectively.

> By default, [`showGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showgrandtotals), [`showRowGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showrowgrandtotals) and [`showColumnGrandTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showcolumngrandtotals) properties in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#datasourcesettings) are set as **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs253/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs253/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs253" %}

## Show or hide sub-totals

Allows to show or hide sub-totals in rows and columns using the [`showSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showsubtotals) property. To hide all the sub-totals in rows and columns, set the property [`showSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showsubtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#datasourcesettings) to **false**. End user can also hide sub-totals for rows or columns separately by setting the property [`showRowSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showrowsubtotals) or [`showColumnSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showcolumnsubtotals) in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#datasourcesettings) to **false** respectively.

> By default, [`showSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showsubtotals), [`showRowSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showrowsubtotals) and [`showColumnSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showcolumnsubtotals) properties in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#datasourcesettings) are set as **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs255/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs255/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs255" %}

## Show/hide sub-totals for specific fields

Allows to show or hide sub-totals for specific fields in rows and columns using the [`showSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showsubtotals) property. To hide sub-totals for a specific field in row or column axis, set the property [`showSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showsubtotals) in [`row`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#rows) or [`column`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#columns) to **false** respectively.

> By default, [`showSubTotals`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#showsubtotals) property in [`row`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#rows) or [`column`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettingsModel#columns) is set as **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs256/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs256/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs256" %}

## Show sub-totals at top or bottom

Allows to show sub-totals either at top or bottom of the header group in rows and columns by using the [`subTotalsPosition`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings#subtotalsposition) property. By default, [`subTotalsPosition`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings#subtotalsposition) property is set to **Auto**, which means that column sub-totals are displayed at the bottom and row sub-totals are displayed at the top of the header group in the pivot table.

To show sub-totals at top of the header group in rows and columns, set the [`subTotalsPosition`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings#subtotalsposition) property in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings) to **Top**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs257/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs257/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs257" %}

To show sub-totals at bottom of the header group in rows and columns, set the [`subTotalsPosition`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings#subtotalsposition) property in [`dataSourceSettings`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/dataSourceSettings) to **Bottom**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs258/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs258/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs258" %}

## Show or hide totals using toolbar

It can also be achieved using built-in toolbar options by setting the [`showToolbar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#showtoolbar) property to **true**. Also, include the items **GrandTotal** and **SubTotal** within the [`toolbar`](https://ej2.syncfusion.com/javascript/documentation/api/pivotview/index-default#toolbar) property. End user can now see "Show/Hide Grand totals" and "Show/Hide Sub totals" icons in toolbar UI automatically.

The grand totals and sub-totals can be dynamically displayed at the top or bottom of the pivot table's row and column axes by using the built-in options "Grand totals position" and "Subtotals position" available in the grand totals and sub-totals drop down menus, respectively.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs259/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs259/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/javascript/pivot-table/pivot-table-cs259" %}