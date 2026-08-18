---
layout: post
title: Row spanning in TypeScript Grid control | Syncfusion
description: Learn here all about Row spanning in Syncfusion TypeScript Grid control of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Row spanning 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row spanning in TypeScript Grid control

The grid provides an option to span row cells, allowing you to merge two or more cells in a row into a single cell. This feature can be useful in scenarios where you want to display information that spans across multiple rows, but want to avoid repeating the same information in each row.

To achieve this, You need to define the [rowSpan](../../api/grid/queryCellInfoEventArgs/#rowspan) attribute to span cells in the [queryCellInfo](../../api/grid/queryCellInfoEventArgs/) event. The rowSpan attribute is used to specify the number of rows that the current cell should span.

The `queryCellInfo` event is triggered for each cell in the grid, and allows you to customize the cells in the grid. By handling this event, you can set the `rowSpan` attribute for a cell to achieve row spanning.

In the following demo, **Davolio** cell is spanned to two rows in the **EmployeeName** column.Also Grid supports the spanning of rows and columns for same cells. **Lunch Break** cell is spanned to two rows and three columns in the **1:00** column.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/row-spanning-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/row-spanning-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/row-spanning-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/grid/row-spanning-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/row-spanning-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/row-spanning-cs1" %}
{% endif %}

> To disable the spanning for particular grid page, you need to use **requestType** from `queryCellInfo` event argument.
> The `rowSpan` and `colSpan` attributes can be used together to merge cells both vertically and horizontally.

## Limitations

* The [updateCell](../../api/grid/#updatecell) method does not support row spanning.
* Row spanning is not compatible with the following features:
    1. Virtual scrolling
    2. Infinite scrolling
    3. Grouping
    4. Row drag and drop
    5. Autofill
    6. Inline editing
    7. Batch editing
    8. CRUD

## Row spanning using enableRowSpan property    

The Syncfusion Grid introduces a simplified approach to vertically merge cells using the `enableRowSpan` property. 

When the `enableRowSpan` property is enabled, the Grid automatically merges cells with matching data across adjacent columns without requiring manual span configuration using the [queryCellInfo](../../api/grid/#querycellinfo) event. These merged cells are visually combined into a single cell, improving readability.

Here is an example of how to use the `enableRowSpan` property to merge cells vertically:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/grid/row-spanning-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/row-spanning-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/row-spanning-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/grid-sdk/typescript/grid/row-spanning-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/grid/row-spanning-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/grid/row-spanning-cs2" %}
{% endif %}

> You can also control spanning at the column level. To prevent merging for specific columns, set `enableRowSpan` to **false** in the column definition.

### Limitation

* Virtualization
* Infinite Scrolling
* Lazy Load Grouping
* Row Drag and Drop
* Column Virtualization
* Detail Template
* Editing
* Export
* Foreign Key
* Hierarchy Grid
