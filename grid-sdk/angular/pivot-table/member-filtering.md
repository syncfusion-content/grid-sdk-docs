---
layout: post
title: Member filtering in Angular Pivotview component | Syncfusion
description: Learn here all about Member filtering in Syncfusion Angular Pivotview component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Member filtering 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Member filtering in Angular Pivotview component

Member filtering allows you to view pivot table with particular records based on filter criteria. You can disable the member filter by setting the [`allowMemberFilter`](https://ej2.syncfusion.com/angular/documentation/api/pivotview/datasourcesettings#allowmemberfilter) property to **false**. By default, this property is set as **true**.

## Filtering through UI

Filtering can also be performed through UI option available in [`grouping bar`](./grouping-bar) and [`field list`](./field-list) at run time.

## Filtering through code

It can be configured using the `filterSettings` option through code-behind. The settings required to filter at initial rendering are:
* `name`: It allows to set field name.
* `type`: It allows to set filter type as either "Include" or "Exclude" to the field.
* `items`: It allows to set the filter members of the field.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/getting-started-cs183/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/getting-started-cs183/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/pivot-table/getting-started-cs183" %}

## See Also

* [Label Filtering](./label-filtering)
* [Value Filtering](./value-filtering)