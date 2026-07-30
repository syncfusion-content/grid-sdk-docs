---
layout: post
title: Hide empty headers in Vue Pivotview component | Syncfusion
description: Learn here all about Hide empty headers in Syncfusion Vue Pivotview component of Syncfusion Essential JS 2 and more.
control: Hide empty headers 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Hide empty headers in the Vue Pivot Table component

When the raw data for a particular field is not defined, it will be shown as 'Undefined' in the pivot table headers. You can hide those headers by setting the [`showHeaderWhenEmpty`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettingsModel#showheaderwhenempty) property to **false** in the pivot table.

For example, when the raw data contains **"United Kingdom"** for the 'Country' field but the **"State"** field is undefined, the header displays as **"United Kingdom >> Undefined"**. Here, you can hide those 'Undefined' headers using the [`showHeaderWhenEmpty`](https://ej2.syncfusion.com/documentation/api/pivotview/dataSourceSettingsModel#showheaderwhenempty) property.

> By default, this property is set to **true**.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/pivot-table/pivotNullData-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/pivot-table/pivotNullData-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/pivot-table/pivotNullData-cs1" %}