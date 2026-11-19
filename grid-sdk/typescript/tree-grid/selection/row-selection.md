---
layout: post
title: TypeScript TreeGrid Row Selection | Syncfusion
description: Learn how to use row selection in TypeScript TreeGrid, including programmatic selection, selected records, row indexes, and persistent selection.
platform: grid-sdk
control: Row selection
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row Selection in TypeScript TreeGrid

## Select row at initial rendering

To select a row at initial rendering, set the [`selectedRowIndex`](https://ej2.syncfusion.com/documentation/api/treegrid#selectedrowindex) value.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/selection-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/selection-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/selection-cs4" %}


## Get selected row indexes

You can get the selected row indexes by using the [`getSelectedRowIndexes`](https://ej2.syncfusion.com/documentation/api/treegrid#getselectedrowindexes) method.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/selection-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/selection-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/selection-cs5" %}


## Multiple selection based on condition

You can select multiple treegrid rows based on condition by using the [`selectRows`](https://ej2.syncfusion.com/documentation/api/treegrid#selectrows) method.

In the following code, the rows which contains `taskID` value as `3` and `5` are selected at initial rendering.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/selection-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/selection-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/selection-cs6" %}


## Toggle selection

The Toggle selection allows to perform selection and unselection of the particular row or cell. To [`enable toggle`](https://ej2.syncfusion.com/documentation/api/treegrid/selectionSettings#enabletoggle) selection, set enableToggle property of the selectionSettings as true. If you click on the selected row or cell then it will be unselected and vice versa.


 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/grid-sdk/typescript/treegrid/selection-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/grid-sdk/typescript/treegrid/selection-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/typescript/treegrid/selection-cs7" %}


>If multi selection is enabled, then first click on any selected row (without pressing Ctrl key), it will clear the multi selection and in second click on the same row, it will be unselected.