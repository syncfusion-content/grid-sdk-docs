---
layout: post
title: Row selection in Vue Treegrid component | Syncfusion
description: Learn here all about Row selection in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Row selection 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row selection in Vue Treegrid component

## Toggle selection

The Toggle selection allows to perform selection and unselection of the particular row or cell. To enable toggle selection, set [`enableToggle`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/selectionSettings/#enableToggle) property of the selectionSettings as true. If you click on the selected row or cell then it will be unselected and vice versa.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/selection/default-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/selection/default-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/selection/default-cs4" %}

>If multi selection is enabled, then first click on any selected row (without pressing Ctrl key), it will clear the multi selection and in second click on the same row, it will be unselected.