---
layout: post
title: Row editing in Vue Treegrid component | Syncfusion
description: Learn here all about Row editing in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Row editing 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Row editing in Vue Treegrid component

In Row edit mode, when you start editing the currently selected record, the entire row is changed to edit state.
You can change the cell values of the row and save edited data to the data source.
To enable Row edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/editSettingsModel/#mode) as `Row`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/editing/default-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/editing/default-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/editing/default-cs13" %}