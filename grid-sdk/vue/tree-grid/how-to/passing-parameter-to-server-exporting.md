---
layout: post
title: Passing parameter to server exporting in Vue Treegrid component | Syncfusion
description: Learn here all about Passing parameter to server exporting in Syncfusion Vue Treegrid component of Syncfusion Essential JS 2 and more.
control: Passing parameter to server exporting 
platform: grid-sdk
documentation: ug
domainurl: https://help.syncfusion.com/grid-sdk
---

# Passing parameter to server exporting in Vue Treegrid component

You can pass the additional parameter in the [`query`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#query) property by invoking [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method. In the [`toolbarClick`](https://ej2.syncfusion.com/vue/documentation/api/treegrid/#toolbarclick) event, you can define params as key and value pair so it will receive at the server side when exporting.

In the below example, we have passed *recordcount* as *12* using [`addParams`](https://ej2.syncfusion.com/documentation/api/data/query/#addparams) method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/how-to/default-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid-sdk/vue/treegrid/how-to/default-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/grid-sdk/vue/treegrid/how-to/default-cs16" %}