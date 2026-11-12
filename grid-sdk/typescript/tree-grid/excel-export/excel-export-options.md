---
layout: post
title: TypeScript TreeGrid Excel Export Options | Syncfusion
description: Learn about Excel export options in TypeScript TreeGrid, including export customization, hidden columns, selected records, and advanced export settings.
platform: grid-sdk
control: Excel export options
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Excel Export Options in TypeScript TreeGrid

## To customize excel export

The excel export provides an option to customize mapping of the treegrid to excel document.

### Export hidden columns

The excel export provides an option to export hidden columns of treegrid by defining `includeHiddenColumn` as `true`.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/excel-export-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/excel-export-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/excel-export-cs4" %}


### Show or hide columns on exported excel

You can show a hidden column or hide a visible column while printing the treegrid using [`toolbarClick`](https://ej2.syncfusion.com/documentation/api/treegrid#toolbarclick) and [`excelExportComplete`](https://ej2.syncfusion.com/documentation/api/treegrid#excelExportComplete) events.

In the `toolbarClick` event, based on `args.item.text` as `Excel Export`. We can show or hide columns by setting `column.visible` property to `true` or `false` respectively.

In the excelExportComplete event, We have reversed the state back to the previous state.

In the below example, we have `Duration` as a hidden column in the treegrid. While exporting, we have changed `Duration` to visible column and `StartDate` as hidden column.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/excel-export-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/excel-export-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/excel-export-cs5" %}


### File name for exported document

You can assign the file name for the exported document by defining `fileName` property in [`ExcelExportProperties`](https://ej2.syncfusion.com/documentation/api/treegrid#excelExportProperties).


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/excel-export-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/excel-export-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/excel-export-cs6" %}
