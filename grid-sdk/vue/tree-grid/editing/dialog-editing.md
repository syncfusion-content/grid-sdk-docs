---
layout: post
title: Vue TreeGrid Dialog Editing | Syncfusion
description: Learn how to use dialog editing in Vue TreeGrid to edit records through customizable forms and perform CRUD operations.
control: Dialog editing 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Dialog Editing in Vue TreeGrid

In Dialog edit mode, when you start editing the currently selected row, data will be shown on a dialog. You can change the cell values and save edited data to the data source.

To enable Dialog edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/editSettingsModel/#mode) as `Dialog`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/editing/default-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/editing/default-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/editing/default-cs5" %}