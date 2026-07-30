---
layout: post
title: Column reorder in Vue Treegrid component | Syncfusion
description: Learn here all about Column reorder in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Column reorder 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Column reorder in Vue Treegrid component

Reordering can be done by drag and drop of a particular column header from one index to another index within the treegrid. To enable reordering, set the [`allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#allowreordering) to true.

To use reordering, inject the [`Reorder`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#reordermodule) module in the treegrid.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/columns/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/columns/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/columns/default-cs4" %}

> You can disable reordering a particular column by setting the [`columns.allowReordering`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column/#reordermodule) to false.

## Reorder multiple columns

Multiple columns can be reordered at a time by using the [`reorderColumns`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/column#reordercolumns) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/columns/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/columns/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/columns/default-cs5" %}