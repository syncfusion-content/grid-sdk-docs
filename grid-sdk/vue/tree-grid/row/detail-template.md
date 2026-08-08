---
layout: post
title: Vue TreeGrid Detail Template | Syncfusion
description: Learn how to use detail templates in Vue TreeGrid to display expandable row content, nested data, and custom detail views.
control: Detail template 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Detail Template in Vue TreeGrid

The detail template provides additional information about a particular row. By expanding the parent row the child rows are expanded along with their detail template. The [`detailTemplate`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#detailtemplate) property accepts either the template string or HTML element ID.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/row/detailtemplate-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/row/detailtemplate-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/row/detailtemplate-cs1" %}