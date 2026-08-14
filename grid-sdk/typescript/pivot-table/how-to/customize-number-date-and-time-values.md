---
layout: post
title: Customize number date and time values in Javascript | Syncfusion
description: Learn here all about Customize number date and time values in Syncfusion ##Platform_Name## Pivot Table component of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize number date and time values 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize number, date, and time values in JavaScript Pivot Table

You can format the number, date, and time values for each field using the [`formatSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#formatsettings) option under [`dataSourceSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings). This configuration is applied during component initialization to ensure consistent data presentation across the pivot table.

## Number formatting

For numeric fields, the formatting settings include the following properties:

* [`name`](https://ej2.syncfusion.com/documentation/api/pivotview/formatSettingsModel#name): Specifies the field name to which the formatting should be applied.
* [`format`](https://ej2.syncfusion.com/documentation/api/pivotview/formatSettingsModel#format): Defines the number format pattern for the respective field (e.g., 'N2' for two decimal places, 'C' for currency).

> Also, you can customize the applied number format by setting the [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/common/internationalization#manipulating-numbers) options in [`formatSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#formatsettings) itself.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs75/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs75/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs75" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs75/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs75/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs75" %}
{% endif %}

## Date and Time formatting

For date and time fields, the formatting settings include these properties:

* [`name`](https://ej2.syncfusion.com/documentation/api/pivotview/formatSettingsModel#name): Specifies the field name to which the formatting should be applied.
* [`format`](https://ej2.syncfusion.com/documentation/api/pivotview/formatSettingsModel#format): Defines the date/time format pattern for the respective field (e.g., 'dd/MM/yyyy', 'MMM yyyy').
* [`type`](https://ej2.syncfusion.com/documentation/api/pivotview/formatSettingsModel#type): Specifies the format type to be used for the respective field (Date, Time, or DateTime).

> Also, you can customize the applied date format by setting [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/common/internationalization#date-formatting) options in [`formatSettings`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettings#formatsettings) itself.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/pivot-table/pivot-table-cs76/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs76/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs76" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/pivot-table/pivot-table-cs76/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/pivot-table/pivot-table-cs76/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/pivot-table-cs76" %}
{% endif %}

## Limitations of date formatting

According to Firefox and Edge browser standards, most date and time formats used in data sources are not supported. For example: Apr-2000, Apr-01-2000, 01-03-2000, 2000-Apr-01 and similar formats are not recognized. However, [`ISO formats`](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15) are supported across all browsers for consistent date handling.