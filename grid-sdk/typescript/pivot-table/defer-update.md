---
layout: post
title: Defer update in TypeScript Pivot Table component | Syncfusion
description: Learn here all about Defer update in Syncfusion TypeScript Pivot Table component of Syncfusion Essential JS 2 and more.
platform: grid-sdk
control: Defer update 
publishingplatform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Defer update in TypeScript Pivot Table component

Defer layout update support allows updating the pivot table component only on demand, significantly improving performance for complex data operations. When this feature is enabled, users can drag-and-drop fields between row, column, value, and filter axes, apply sorting and filtering inside the Field List, resulting in changes to the pivot report configuration without immediately updating the pivot table values. Once all operations are performed and the "Apply" button is clicked in the Field List, the pivot table will update with the final modified report. This approach reduces multiple unnecessary renders and brings better performance, especially when working with large datasets or performing multiple field operations.

The field list can be displayed in two different formats to interact with the pivot table:

* **In-built Field List (Popup)**: Displays the field list icon in the pivot table UI to invoke the built-in dialog.
* **Stand-alone Field List (Fixed)**: Displays the field list in a static position within a web page.

## In-built Field List (Popup)

To enable deferred updates in the pivot table, set the [`allowDeferLayoutUpdate`](https://ej2.syncfusion.com/documentation/api/pivotview/index-default#allowdeferlayoutupdate) property to **true** in [`PivotView`](https://ej2.syncfusion.com/documentation/api/pivotview). Note that the defer update option can be controlled only via Field List during runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs336/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs336/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/pivot-table/pivot-table-cs336" %}

## Stand-alone Field List (Fixed)

The field list can be rendered in a static position anywhere in the web page layout, functioning as a separate component. To achieve this, set the [`renderMode`](https://ej2.syncfusion.com/documentation/api/pivotfieldlist#rendermode) property to **Fixed** in [`PivotFieldList`](https://ej2.syncfusion.com/documentation/api/pivotfieldlist).

To enable deferred updates in the static fieldlist, set the [`allowDeferLayoutUpdate`](https://ej2.syncfusion.com/documentation/api/pivotfieldlist#allowdeferlayoutupdate) property to **true** in [`PivotFieldList`](https://ej2.syncfusion.com/documentation/api/pivotfieldlist). Note that the defer update option can be controlled only via Field List during runtime.

> To make the field list interact with the pivot table, use the **updateView** and **update** methods to synchronize data source updates between both the field list and pivot table components simultaneously.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/field-list-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/pivot-table/field-list-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/pivot-table/field-list-cs10" %}