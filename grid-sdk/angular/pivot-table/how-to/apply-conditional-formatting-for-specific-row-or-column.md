---
layout: post
title: Apply Conditional Formatting in Angular Pivot Table | Syncfusion
description: Apply conditional formatting to rows or columns in the Syncfusion EJ2 Angular Pivot Table. Customize cell styles based on values to highlight key data.
platform: grid-sdk
control: Apply conditional formatting for specific row or column 
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Conditional Formatting for Specific Rows or Columns

You can apply conditional formatting for specific row or column using `label` option in the pivot table. It can be configured using the `conditionalFormatSettings` option through code behind, during initial rendering. The required settings are:

* `label`: Specifies the header name to apply conditions for row or column.
* `condition`: Specifies the operator type such as equals, greater than, less than, etc.
* `value1`: Specifies the start value.
* `value2`: Specifies the end value.
* `style`: Specifies the style for the cell.

To use the conditional formatting feature, You need to inject the `ConditionalFormatting` module in pivot table.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/getting-started-cs156/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid-sdk/angular/pivot-table/getting-started-cs156/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/grid-sdk/angular/pivot-table/getting-started-cs156" %}
