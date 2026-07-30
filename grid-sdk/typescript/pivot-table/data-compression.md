---
layout: post
title: Data Compression in TypeScript Pivot Table component | Syncfusion
description: Learn here all about data compression in Syncfusion TypeScript Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Data Compression 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Data Compression in TypeScript Pivot Table component

> This property is applicable only for the relational data source.

When binding large volumes of raw data, the pivot table processes all raw data to generate aggregated data during initial rendering and report manipulation. However, with data compression enabled, the input raw data is compressed based on the uniqueness of the raw data, and the final compressed raw data is utilized by the pivot table. The compressed raw data is then used for all subsequent operations, reducing the looping complexity and improving the performance of the pivot table. For example, if the pivot table connects to one million raw data records that compress to 1,000 unique raw data records, it will render significantly faster—potentially within 3 seconds rather than 10 seconds, depending on the data complexity and system specifications. Enable this option by using the [allowDataCompression](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#allowdatacompression) property.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs486/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs486/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs486" %}

**Limitations during data compression:**

- The following aggregation types are not supported:
  - Average
  - PopulationStDev
  - SampleStDev
  - PopulationVar
  - SampleVar
- If any of the above aggregation types are used, they will be automatically converted to **"Sum"** aggregation.
- **"DistinctCount"** will function as **"Count"** aggregation type.
- In a calculated field, existing fields can be inserted without changing their default aggregation type. Even if the aggregation type is changed, it will revert to the default aggregation type for calculation purposes.
